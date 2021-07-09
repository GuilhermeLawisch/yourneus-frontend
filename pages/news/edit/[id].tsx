import { useRouter } from "next/dist/client/router"
import Head from "next/head"
import { Container } from "../../../src/styles/register-edit"

export default function NewsAdmin() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>YourneuS | Edit News</title>
      </Head>

      <Container>
        <div>
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
      </Container>
    </>
  )
}