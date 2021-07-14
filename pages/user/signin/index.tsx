import Head from "next/head"
import { useContext } from "react"
import { useForm } from 'react-hook-form'
import cx from "classnames"

import { Header } from "../../../src/components/Header"
import { Background } from '../../../src/components/Background'
import { Container } from "../../../src/styles/sign"
import { AuthContext } from "../../../src/context/AuthContext"
import { ToggleContext } from "../../../src/context/ToggleContext"
import Router from "next/router"

type IData = {
  email: string;
  password: string;
}

export default function SignIn() {
  const { register, handleSubmit } = useForm()

  const { theme } = useContext(ToggleContext)
  const { signIn } = useContext(AuthContext)

  const handleSignIn = async (data: IData) => {
    await signIn(data)
  }

  return (
    <>
      <Head>
        <title>YourneuS | Sign In</title>
      </Head>

      <Background>
        <Header />
        <Container>
          <div>
            <div>
              <h2>Sign in to your account</h2>
              <form onSubmit={handleSubmit(handleSignIn)} className={cx(
                theme ? 'dark' : ''
              )}>
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
                  <button type="button" onClick={() => Router.push('/user/signup')} >Create Account</button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </Background>
    </>
  )
}