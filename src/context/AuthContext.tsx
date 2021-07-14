import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';

import api from '../services/axios';

type ISignUp = {
  name: string;
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
}

type IAuthContext = {
  user: IUser;
  isAuthenticated: boolean;
  signUp: (data: ISignUp) => Promise<void>
  signIn: (data: ISignIn) => Promise<void>
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

  const signUp = async ({ name, email, password }) => {
    const response = await api.post("/register", { name, email, password })

    console.log(response.data.userData)

    setUser(response.data.userData)
  }
 
  const signIn = async ({ email, password }: ISignIn) => {
    const response = await api.post("/user/auth", { email, password })

    setCookie(undefined, 'yourneustoken', response.data.token, {
      maxAge: 60 * 60 * 1   // 1 hour
    })

    setUser(response.data.user)

    Router.push('/')
  }

  return (
    <>
      <AuthContext.Provider value={{
        user,
        isAuthenticated,
        signUp,
        signIn
      }}>
        { children }
      </AuthContext.Provider>
    </>
  )
}

export { AuthContextProvider }