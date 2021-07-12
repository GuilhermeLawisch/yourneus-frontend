import Head from "next/head"
import Router from "next/router"
import { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"

import { AuthContext } from "../../../src/context/AuthContext"
import { NewsContext } from "../../../src/context/NewsContext"
import { Container } from "../../../src/styles/register-edit"

type IData = {
  title: string;
  category: string;
  content: string;
}

export default function RegisterNews() {
  const { isAuthenticated } = useContext(AuthContext)
  const { createNews } = useContext(NewsContext)

  const { register, handleSubmit } = useForm()

  const handleCreateNews = async (data: IData) => {
    createNews(data)
  }

  useEffect(() => {
    // { isAuthenticated ? <></> : Router.push('/signin') }
  }, [])

  return (
    <>
      <Head>
        <title>YourneuS | Register New News</title>
      </Head>

      <Container>
        <div>
          <h2>Share the news</h2>
          <form onSubmit={handleSubmit(handleCreateNews)}>
            <input {...register('title')} type="text" name="title" id="title" placeholder="Title" />
            <select {...register('category')} name="category" id="category">
              <option value="">Select Category</option>
              <option value="Information">Information</option>
              <option value="Culture">Culture</option>
              <option value="Sport">Sport</option>
              <option value="Famous">Famous</option>
            </select>
            <textarea {...register('content')} name="content" id="content" placeholder="Content" />
            <button type="submit">Register new news</button>
          </form>
        </div>
      </Container>

    </>
  )
}