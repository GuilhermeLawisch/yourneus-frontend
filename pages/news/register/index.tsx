import Head from "next/head"
import { Container } from "../../../src/styles/register-edit"

export default function RegisterNews() {
  return (
    <>
      <Head>
        <title>YourneuS | Register New News</title>
      </Head>

      <Container>
        <div>
          <h2>Share the news</h2>
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
          <button type="button">Register new news</button>
        </div>
      </Container>

    </>
  )
}