import { createContext, useContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';
import { toast } from 'react-hot-toast';

import api from '../services/axios';
import { ToggleContext } from './ToggleContext';

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

  const { toggleVisible } = useContext(ToggleContext)

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'yourneustoken': token } = parseCookies()

    if (token) {
      api.post("/user/data", { token }).then(response => setUser(response.data))
    }
  }, [])

  const signUp = async ({ username, email, password }) => {
    try {
      const response = await api.post("/user/register", { username, email, password })

      Router.push('/user/signin')
    } catch (err) {
      toggleVisible(true)
      toast.error(`accont already exists with this username and email`)
    }
  }
 
  const signIn = async ({ email, password }: ISignIn) => {
    try {
      const response = await api.post("/user/auth", { email, password })

      if (response.data.error) {
        alert(response.data.error)
      }
      
      setCookie(undefined, 'yourneustoken', response.data.token, {
        maxAge: 60 * 60 * 1   // 1 hour
      })

      setUser(response.data.user)

      Router.push('/')
    } catch (err) {
      toggleVisible(true)
      toast.error(`email or password invalid`);
    }
  }

  const update = async ({ username, email, password, avatar_url }: IUser) => {
    try {
    const id = user.id

    const response = await api.put(`/user/update/${id}`, { username, email, password, avatar_url })

    if (response.data.message == 'success') {
      // signIn({ email, password })
      Router.push('/')
    }
    } catch (err) {
      toggleVisible(true)
      toast.error(`${err}`);
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