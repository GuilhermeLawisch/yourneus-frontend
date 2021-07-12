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
  createNews: (data: IDataCreate) => Promise<void>
  getNews: () => Promise<void>
}

export const NewsContext = createContext({} as INewsContext)

const NewsContextProvider = ({ children }) => {
  const [allNews, setAllNews] = useState([]) 

  const getNews = async () => {
    const response = await api.get('/news')

    setAllNews(response.data)
  }

  const createNews = async (data: IDataCreate) => {
    await api.post('/news/create', data)

    Router.push('/')
  }

  return (
    <>
      <NewsContext.Provider value={{
        allNews,
        getNews,
        createNews,
      }}>
        { children }
      </NewsContext.Provider>
    </>
  )
}

export { NewsContextProvider }