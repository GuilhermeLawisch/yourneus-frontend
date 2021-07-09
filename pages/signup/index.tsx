import Head from "next/head"
import { Container } from "../../src/styles/sign"

export default function SignUp() {
  return (
    <>
      <Head>
        <title>YourneuS | Sign Up</title>
      </Head>

      <Container>
        <h2>Create you account now</h2>
        <form>
          <input type="text" name="" id="" placeholder="Name" />
          <input type="text" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />
          <input type="password" name="" id="" placeholder="Password" />
        </form>
        <div className="buttons">
          <button type="button">Sign Up</button>
        </div>
      </Container>
    </>
  )
}