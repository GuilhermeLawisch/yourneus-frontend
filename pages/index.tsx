import React, { useState, useContext, useEffect } from 'react'
import Head from "next/head"
import cx from 'classnames'

import { Header } from '../src/components/Header'
import { Background } from '../src/components/Background'
import { Container } from '../src/styles/home'

import { ToggleContext } from "../src/context/ToggleContext"
import { AuthContext } from "../src/context/AuthContext"
import { NewsContext } from "../src/context/NewsContext"

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

export default function Home() {
  const { theme } = useContext(ToggleContext)
  const { user } = useContext(AuthContext)
  const { getNews } = useContext(NewsContext)
  const { allNews, getAllNews } = useContext(NewsContext)

  const highlighted1 = [-2, '']
  const highlighted2 = [-2, '']
  const highlighted3 = [-2, '']

  allNews.forEach((value:any) => {
    if (value.likes > highlighted1[0]) { 

      highlighted3[0] = highlighted2[0]
      highlighted3[1] = highlighted2[1]

      highlighted2[0] = highlighted1[0]
      highlighted2[1] = highlighted1[1]

      highlighted1[0] = value.likes
      highlighted1[1] = value.id

    } else if (value.likes > highlighted2[0]) {

      highlighted3[0] = highlighted2[0]
      highlighted3[1] = highlighted2[1]

      highlighted2[0] = value.likes
      highlighted2[1] = value.id

    } else if (value.likes > highlighted3[0]) {

      highlighted3[0] = value.likes
      highlighted3[1] = value.id
    }
  })

  const highlightedNews = allNews.filter((value: INews) => value.id === highlighted1[1] || value.id === highlighted2[1] || value.id === highlighted3[1])

  useEffect(() => {
    getAllNews()
  }, [])

  return (
    <>
      <Head>
        <title>YourneuS | Home</title>
      </Head>

      <Background>
        <Header />
        <Container>
          <div className="cardsHighlighted">
            {highlightedNews?.map((value:any, index:any) => {
              return (
                <>
                  <a onClick={() => getNews(value.id)} key={index} className={cx(
                    'card',
                    value.id === highlighted1[1] ? `highlighted1` : '',
                    value.id === highlighted2[1] ? `highlighted2` : '',
                    value.id === highlighted3[1] ? `highlighted3` : ''
                  )}>
                    <h3>{ value.title }</h3>
                    <p>{ value.description }</p>
                  </a>
                </>
              )
            })}
          </div>

          <div className="cards">
            {allNews.map((value:any, index:any) => {
              return (
                <>
                  <a onClick={() => getNews(value.id)} key={index} className={cx(
                    'card',
                    theme ? 'dark' : 'white'
                  )}>
                    <p>{ value.id }</p>
                    <h3>{ value.title }</h3>
                    <p>{ value.category }</p>
                    <p>{ value.content }</p>
                    <p>{ value.idCreator }</p>
                    <p>{ value.createdAt }</p>
                    <p>{ value.updatedAt }</p>
                  </a>
                </>
              )
            })}
          </div>
        </Container>
      </Background>
    </>
  );
}

