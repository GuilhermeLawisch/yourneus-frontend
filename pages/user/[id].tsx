import { useContext, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";

import { AuthContext } from "../../src/context/AuthContext";
import { Background } from "../../src/components/Background";
import { Header } from "../../src/components/Header";
import { Container } from "../../src/styles/user";
import { useForm } from "react-hook-form";

type IUser = {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  passwordHash?: string;
  avatar_url?: string;
}

export default function User() {
  const { user, update } = useContext(AuthContext)

  const { register, handleSubmit } = useForm()

  const handleUpdate = (data: IUser) => {
    update(data)
  }

  return (
    <>
      <Head>
        <title>YourneuS | User</title>
      </Head>

      <Background>
        <Header />
        <Container>
          <div>
            <form onSubmit={handleSubmit(handleUpdate)}>
              <h2>Update your informations here</h2>
              <h3>{ user?.email }</h3>
              { !user ?? <img src={ user?.avatar_url } alt={`Image from ${ user?.username }`} /> }
              <input {...register('username')} type="text" name="username" id="username" placeholder="username" defaultValue={ user?.username } />
              <input {...register('avatar_url')} type="text" name="avatar_url" id="avatar_url" placeholder="avatar url" defaultValue={ user?.avatar_url } />
              <input {...register('password')} type="password" name="password" id="password" placeholder="password" />
              <button type="submit">Update</button>
            </form>
          </div>
        </Container>
      </Background>
    </>
  )
} 