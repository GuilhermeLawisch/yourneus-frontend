import { createContext, useContext, useState } from "react";
import Router from 'next/router';
import { setCookie, parseCookies } from 'nookies';
import { toast } from 'react-hot-toast'
import { format, parseISO } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import api from '../services/axios';
import { AuthContext } from "./AuthContext";
import { ToggleContext } from "./ToggleContext";

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
  likes: Array<string>;
  createdAt: Date;
  updatedAt?: Date;
  dateNews?: string;
}

type INewsCreateAndUpdate = {
  title: string;
  category: string;
  content: string;
}

type INewsContext = {
  allNews: Array<INews>;
  searchNews: Array<INews>;
  news: INews;
  newsEdit: INews; 
  getAllNews: () => Promise<void>
  createNews: (data: INewsCreateAndUpdate) => Promise<void>
  getNews: (id: string | string[]) => Promise<void>
  getSearchNews: (value: string) => Promise<void>
  updateNews: (data: INewsCreateAndUpdate) => Promise<void>
  deleteNews: (id: string) => Promise<void>
}

export const NewsContext = createContext({} as INewsContext)

const NewsContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext)
  const { toggleVisible } = useContext(ToggleContext)

  const [allNews, setAllNews] = useState([]) 
  const [searchNews, setSearchNews] = useState([])
  const [news, setNews] = useState<INews>({} as INews)
  const [newsEdit, setNewsEdit] = useState<INews>({} as INews)

  const getAllNews = async () => {
    toggleVisible(false)

    try {

    const response = await api.get('/news')

    setAllNews(response.data)
    toggleVisible(true)

  } catch (err) {
    toggleVisible(true)
    toast.error(`${err}`);
  }
  }

  const getNews = async (id: string | string[]) => {
    toggleVisible(false)

    try {

    const { 'yourneusidnews': idnews } = parseCookies()
    
    const { 'yourneustoken': token } = parseCookies()

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    let response

    if (id == 'refresh') {
      
      response = await api.get(`/news/${idnews}`)

      response.data.dateNews = format(parseISO(String(response.data.updatedAt)), 'H:mm d MMMM yyyy', { locale: ptBR })

      if (response.data.idCreator == user?.id) {
        console.log('edit')
        setNewsEdit(response.data)
        // Router.push(`/news/edit/${idnews}`)
      } else {
        console.log('normal')
        setNews(response.data)
        // Router.push(`/news/${idnews}`)
      }
      
    } else {
      
      allNews.find((value: any) => {
        if (value.id == id) {
          response = value

          response.dateNews = format(parseISO(String(response.updatedAt)), 'H:mm d MMMM yyyy', { locale: ptBR })

          setCookie(undefined, 'yourneusidnews', value.id, {
            maxAge: 60 * 10   // 10 minutes
          })
        } 
      })

      if (response.idCreator == user?.id) {
        setNewsEdit(response)
        Router.push(`/news/edit/${id}`)
      } else {
        setNews(response)
        Router.push(`/news/${id}`)
      }
    }
    
    toggleVisible(true)

  } catch (err) {
    toggleVisible(true)
    toast.error(`${err}`);
  }
  }

  const getSearchNews = async (value: string) => {
    toggleVisible(false)

    try {
      const response = await api.get(`/news/search/${value}`)

      setSearchNews(response.data)

      Router.push(`/news/show/${value}`)
      toggleVisible(true)
    } catch (err) {
      toggleVisible(true)
      toast.error(`${err}`);
    }
  }

  const createNews = async (data: INewsCreateAndUpdate) => {
    try {
      const { 'yourneustoken': token } = parseCookies()

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      await api.post('/news/create', data)

      Router.push('/')
    } catch (err) {
      toggleVisible(true)
      toast.error(`${err}`);
    }
  }

  const updateNews = async (data: INewsCreateAndUpdate) => {
    try {
      const { 'yourneustoken': token } = parseCookies()

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

    const response = await api.put(`/news/${newsEdit.id}`, data)

    if (response.data.message == 'success') {
      Router.push('/')
    }
    } catch (err) {
      toggleVisible(true)
      toast.error(`${err}`);
    }
  }

  const deleteNews = async (id: string) => {
    try {
      const { 'yourneustoken': token } = parseCookies()

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

    const response = await api.delete(`/news/${id}`) 

    if (response.data.message == 'success') {
      Router.push('/')
    }

    } catch (err) {
      toggleVisible(true)
      toast.error(`${err}`);
    }
  }

  return (
    <>
      <NewsContext.Provider value={{
        allNews,
        searchNews,
        news,
        newsEdit,
        getAllNews,
        createNews,
        getNews,
        getSearchNews,
        updateNews,
        deleteNews
      }}>
        { children }
      </NewsContext.Provider>
    </>
  )
}

export { NewsContextProvider }