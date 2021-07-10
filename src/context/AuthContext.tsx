import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';

import api from '../services/axios';

type ISignIn = {
  email: string;
  password: string;
}

type IUser = {
  name: string;
  email: string;
  avatar_url: string;
}

type IAuthContext = {
  user: IUser;
  isAuthenticated: boolean;
  signIn: (data: ISignIn) => Promise<void>
}

export const AuthContext = createContext({} as IAuthContext)

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null)

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'yourneustoken': token } = parseCookies()

    if (token) {
      api.post("/userdata", { token }).then(response => setUser(response.data.user))
    }
  }, [])

  const signIn = async ({ email, password }: ISignIn) => {
    const response = await api.post("/auth", { email, password })

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
        signIn
      }}>
        { children }
      </AuthContext.Provider>
    </>
  )
}

export { AuthContextProvider }