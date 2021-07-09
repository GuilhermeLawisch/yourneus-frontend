import { useRouter } from "next/dist/client/router"
import Head from "next/head"

import { Header } from "../../src/components/Header"
import { Container } from "../../src/styles/view"

export default function News() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>YourneuS | View News</title>
      </Head>

      <Header />
      <Container>
        <div>
          
        </div>
      </Container>
    </>
  )
}