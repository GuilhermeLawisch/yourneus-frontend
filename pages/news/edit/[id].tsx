import { useRouter } from "next/dist/client/router"
import Head from "next/head"
import cx from 'classnames'
import { Container } from "../../../src/styles/create-edit"

import { Background } from '../../../src/components/Background'
import { Header } from '../../../src/components/Header'
import { ToggleContext } from '../../../src/context/ToggleContext'
import { useContext } from "react"

export default function NewsAdmin() {
  const router = useRouter()
  const { id } = router.query

  const { theme } = useContext(ToggleContext)

  return (
    <>
      <Head>
        <title>YourneuS | Edit News</title>
      </Head>

      <Background>
        <Header />
        <Container>
          <div>
            <div className={cx(
              theme ? 'dark' : ''
            )}>
              <h2>Update your news</h2>
              <form>
                <input type="text" name="" id="" placeholder="Title" />
                <select name="" id="">
                  <option value="">Select Category</option>
                  <option value="">Information</option>
                  <option value="">Sport</option>
                  <option value="">Famous</option>
                </select>
                <textarea name="" id="" placeholder="Description" />
              </form>
              <button type="button">Update news</button>
            </div>
          </div>
         
        </Container>
      </Background>
    </>
  )
}