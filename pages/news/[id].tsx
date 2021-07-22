import Head from "next/head"
import { useContext, useEffect, useState } from "react"
import { useRouter } from 'next/router'

import { Background } from "../../src/components/Background"
import { Header } from "../../src/components/Header"
import { Container } from "../../src/styles/view"

import { NewsContext } from "../../src/context/NewsContext"

export default function News() {
  const router = useRouter()
  const id = router.query.id

  const [date, setDate] = useState('')
  const { news, getNews } = useContext(NewsContext)

  useEffect(() => {
    if (Object.keys(news).length == 0) {
      getNews('refresh')
    }
  }, [])

  return (
    <>
      <Head>
        <title>YourneuS | View</title>
      </Head>

      <Background>
        <Header />
        <Container>
          <div>
            <h2>{ news?.title }</h2>
            <p>{ news?.category }</p>
            <p>{ news?.content }</p>
            <span>{ `Atualizado: ${news?.dateNews}` }</span>
          </div>
        </Container>
      </Background>
    </>
  )
}