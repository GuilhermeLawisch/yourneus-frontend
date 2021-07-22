import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';

import api from '../services/axios';

type ISignUp = {
  username: string;
  email: string;
  password: string;
}

type ISignIn = {
  email: string;
  password: string;
}

type IUser = {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  passwordHash?: string;
  avatar_url?: string;
  subscribedAt?: Date;
  updatedAt?: Date;
}

type IAuthContext = {
  user: IUser;
  isAuthenticated: boolean;
  signUp: (data: ISignUp) => Promise<void>
  signIn: (data: ISignIn) => Promise<void>
  update: (data: IUser) => Promise<void>
}

export const AuthContext = createContext({} as IAuthContext)

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null)

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'yourneustoken': token } = parseCookies()

    if (token) {
      api.post("/user/data", { token }).then(response => setUser(response.data))
    }
  }, [])

  const signUp = async ({ username, email, password }) => {
    const response = await api.post("/user/register", { username, email, password })

    console.log(response.data.error)
    console.log(response.data.message)

    Router.push('/user/signin')
  }
 
  const signIn = async ({ email, password }: ISignIn) => {
    const response = await api.post("/user/auth", { email, password })

    if (response.data.error) {
      alert(response.data.error)
    }
    
    setCookie(undefined, 'yourneustoken', response.data.token, {
      maxAge: 60 * 60 * 1   // 1 hour
    })

    setUser(response.data.user)

    Router.push('/')
  }

  const update = async ({ username, email, password, avatar_url }: IUser) => {
    const id = user.id

    const response = await api.put(`/user/update/${id}`, { username, email, password, avatar_url })

    if (response.data.message == 'success') {
      // signIn({ email, password })
      Router.push('/')
    }
  }

  return (
    <>
      <AuthContext.Provider value={{
        user,
        isAuthenticated,
        signUp,
        signIn,
        update
      }}>
        { children }
      </AuthContext.Provider>
    </>
  )
}

export { AuthContextProvider }