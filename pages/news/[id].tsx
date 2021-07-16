import Head from "next/head"
import { useContext } from "react"
import { format, parseISO } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import { Background } from "../../src/components/Background"
import { Header } from "../../src/components/Header"
import { Container } from "../../src/styles/view"

import { NewsContext } from "../../src/context/NewsContext"

export default function News() {
  const { news } = useContext(NewsContext)

  const date = format(parseISO(String(news?.updatedAt)), 'H:mm d MMMM yyyy', { locale: ptBR })

  return (
    <>
      <Head>
        <title>YourneuS | View News</title>
      </Head>

      <Background>
        <Header />
        <Container>
          <div>
            <h2>{ news?.title }</h2>
            <p>{ news?.category }</p>
            <p>{ news?.content }</p>
            <span>{ `Atualizado: ${date}` }</span>
          </div>
        </Container>
      </Background>
    </>
  )
}