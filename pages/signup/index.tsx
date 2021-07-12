import Head from "next/head"
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Container } from "../../src/styles/sign"

type IData = {
  name: string;
  email: string;
  password: string;
}

import { AuthContext } from "../../src/context/AuthContext"

export default function SignUp() {
  const { register, handleSubmit } = useForm()

  const { user, signUp } = useContext(AuthContext)

  const handleSignIn = async (data: IData) => {
    console.log(data)

    await signUp(data)
  }

  return (
    <>
      <Head>
        <title>YourneuS | Sign Up</title>
      </Head>

      { console.log(user) }

      <Container>
        <h2>Create you account now</h2>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <input {...register('name')} type="text" name="name" id="name" placeholder="Name" />
          <input {...register('email')} type="text" name="email" id="email" placeholder="Email" />
          <input {...register('password')} type="password" name="password" id="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </Container>
    </>
  )
}