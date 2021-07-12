import Head from "next/head"
import { useContext } from "react"
import { useForm } from 'react-hook-form'

import { Container } from "../../src/styles/sign"
import { AuthContext } from "../../src/context/AuthContext"

type IData = {
  email: string;
  password: string;
}

export default function SignIn() {
  const { register, handleSubmit } = useForm()

  const { user, signIn } = useContext(AuthContext)

  const handleSignIn = async (data: IData) => {
    await signIn(data)
  }

  return (
    <>
      <Head>
        <title>YourneuS | Sign In</title>
      </Head>

      <Container>
        <h2>Sign in to your account</h2>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <input {...register('email')} type="text" name="email" id="email" placeholder="Email" />
          <input {...register('password')} type="password" name="password" id="password" placeholder="Password" />
          <div>
            <div>
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember-me</label>
            </div>
            <a href="#">Forgot your password?</a>
          </div>
          <div className="buttons">
            <button type="submit">Sign In</button>
            <p>or</p>
            <button type="button">Create Account</button>
          </div>
        </form>
      </Container>
    </>
  )
}