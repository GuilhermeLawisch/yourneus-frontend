import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';

import api from '../services/axios';

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

type IDataCreate = {
  title: string;
  category: string;
  content: string;
}

type INewsContext = {
  allNews: Array<Object>;
  news: INews;
  getAllNews: () => Promise<void>
  createNews: (data: IDataCreate) => Promise<void>
  getNews: (id: string | string[]) => Promise<void>
}

export const NewsContext = createContext({} as INewsContext)

const NewsContextProvider = ({ children }) => {
  const [allNews, setAllNews] = useState([]) 
  const [news, setNews] = useState<INews>({} as INews)

  const getAllNews = async () => {
    const response = await api.get('/news')

    setAllNews(response.data)
  }

  const createNews = async (data: IDataCreate) => {
    await api.post('/news/create', data)

    Router.push('/')
  }

  const getNews = async (id: string | string[]) => {
    const response = await api.get(`/news/${id}`)

    setNews(response.data)

    Router.push(`/news/${id}`)
  }

  return (
    <>
      <NewsContext.Provider value={{
        allNews,
        news,
        getAllNews,
        createNews,
        getNews
      }}>
        { children }
      </NewsContext.Provider>
    </>
  )
}

export { NewsContextProvider }