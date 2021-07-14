import { createContext, useContext, useEffect, useState } from "react";
import Router from 'next/router';

import api from '../services/axios';
import { User } from "../../pages/user";
import { AuthContext } from "./AuthContext";

type IUser = {
  username?: string;
  email?: string;
  password?: string;
  passwordHash?: string;
  avatar_url?: string;
}

type INews = {
  id: string;
  title: string;
  category: string;
  content: string;
  idCreator: string;
  likes: number;
  createdAt: Date;
  updatedAt?: Date;
}

type INewsCreateAndUpdate = {
  title: string;
  category: string;
  content: string;
}

type INewsContext = {
  allNews: Array<Object>;
  news: INews;
  newsEdit: INews;
  getAllNews: () => Promise<void>
  createNews: (data: INewsCreateAndUpdate) => Promise<void>
  getNews: (id: string) => Promise<void>
  updateNews: (data: INewsCreateAndUpdate) => Promise<void>
}

export const NewsContext = createContext({} as INewsContext)

const NewsContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext)

  const [allNews, setAllNews] = useState([]) 
  const [news, setNews] = useState<INews>({} as INews)
  const [newsEdit, setNewsEdit] = useState<INews>({} as INews)

  const getAllNews = async () => {
    const response = await api.get('/news')

    setAllNews(response.data)
  }

  const createNews = async (data: INewsCreateAndUpdate) => {
    await api.post('/news/create', data)

    Router.push('/')
  }

  const getNews = async (id: string) => {
    const response = await api.get(`/news/${id}`)

    if (response.data.idCreator == user?.id) {
      setNewsEdit(response.data)
      Router.push(`/news/edit/${id}`)
    } else {
      setNews(response.data)
      Router.push(`/news/${id}`)
    }
  }

  const updateNews = async (data: INewsCreateAndUpdate) => {
    const response = await api.put(`/news/${newsEdit.id}`, data)

    if (response.data.message == 'success') {
      Router.push('/')
    }
  }

  return (
    <>
      <NewsContext.Provider value={{
        allNews,
        news,
        newsEdit,
        getAllNews,
        createNews,
        getNews,
        updateNews
      }}>
        { children }
      </NewsContext.Provider>
    </>
  )
}

export { NewsContextProvider }