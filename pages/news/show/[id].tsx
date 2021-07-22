import { useContext } from "react"
import Head from "next/head"
import cx from 'classnames'

import { Header } from '../../../src/components/Header'
import { Background } from '../../../src/components/Background'
import { Container } from '../../../src/styles/home'
import { ToggleContext } from "../../../src/context/ToggleContext"
import { NewsContext } from "../../../src/context/NewsContext"

export default function Show() {
  const { theme } = useContext(ToggleContext)
  const { searchNews, getNews } = useContext(NewsContext)


  return (
    <>
      <Head>
        <title>YourneuS | Search</title>
      </Head>

      <Background>
        <Header />
        <Container>
          <div className="show">
            <div className="cards search">
              {searchNews?.map((value:any, index:any) => {
                return (
                  <>
                    <a onClick={() => getNews(value.id)} key={index} className={cx(
                      'card',
                      theme ? 'dark' : 'white'
                    )}>
                      <h3>{ value.title }</h3>
                      <p className="category">{ value.category }</p>
                      <p className="date">{ value.date }</p>
                    </a>
                  </>
                )
              })}
            </div>
          </div>
        </Container>
      </Background>
    </>
  )
}