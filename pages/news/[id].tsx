import { useRouter } from "next/dist/client/router"
import Head from "next/head"
import { useContext, useEffect } from "react"

import { Background } from "../../src/components/Background"
import { Header } from "../../src/components/Header"
import { Container } from "../../src/styles/view"

import { NewsContext } from "../../src/context/NewsContext"

export default function News() {
  const { news } = useContext(NewsContext)

  return (
    <>
      <Head>
        <title>YourneuS | View News</title>
      </Head>

      <Background>
        <Header />
        <Container>
          <div>
            <p>{ news?.title }</p>
          </div>
        </Container>
      </Background>
    </>
  )
}