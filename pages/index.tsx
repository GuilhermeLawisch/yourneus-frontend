import React, { useState, useContext } from 'react'
import Head from "next/head"
import cx from 'classnames'

import { Header } from '../src/components/Header'
import { Background } from '../src/components/Background'
import { Container } from '../src/styles/home'

import { AuthContext } from "../src/context/AuthContext"
import { ToggleContext } from "../src/context/ToggleContext"

export default function Home() {
  const { user } = useContext(AuthContext)
  const { theme } = useContext(ToggleContext)

  const highlighted1 = [0, '']
  const highlighted2 = [0, '']
  const highlighted3 = [0, '']

  const [values, setValues] = useState([
    {
      id: '12',
      title: 'Nova Vacina 12',
      description: 'Mais uma',
      date: '2021/07/02',
      likes: 11
    }, {
      id: '34',
      title: 'Nova Vacina2 34',
      description: 'Mais uma',
      date: '2021/07/03',
      likes: 11
    }, {
      id: '56',
      title: 'Nova Vacin3 56',
      description: 'Mais uma',
      date: '2021/07/01',
      likes: 2
    }, {
      id: '78',
      title: 'Nova Vacina 78',
      description: 'Mais uma',
      date: '2021/07/02',
      likes: 6
    }, {
      id: '910',
      title: 'Nova Vacina2 910',
      description: 'Mais uma',
      date: '2021/07/03',
      likes: 12
    }, {
      id: '1112',
      title: 'Nova Vacin3 1112',
      description: 'Mais uma',
      date: '2021/07/01',
      likes: 11
    }
  ])

  values.map((value:any) => {
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

  const highlightedNews = values.filter(value => value.id === highlighted1[1] || value.id === highlighted2[1] || value.id === highlighted3[1])

  return (
    <>
      <Head>
        <title>YourneuS</title>
      </Head>

      <Background>
        <Header />
        <Container>
          <div className="cardsHighlighted">
            {highlightedNews.map((value:any, index:any) => {
              return (
                <>
                  <a href={`/news/${value.id}`} key={index} className={cx(
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
            {values.map((value:any, index:any) => {
              return (
                <>
                  <a  href={`/news/${value.id}`} key={index} className={cx(
                    'card',
                    theme ? 'dark' : 'white'
                  )}>
                    <h3>{ value.title }</h3>
                    <p>{ value.description }</p>
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

