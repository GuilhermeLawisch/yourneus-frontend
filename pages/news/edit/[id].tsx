import { useContext, useEffect } from "react"
import Head from "next/head"
import cx from 'classnames'
import { useForm } from "react-hook-form"

import { Container } from "../../../src/styles/create-edit"
import { Background } from '../../../src/components/Background'
import { Header } from '../../../src/components/Header'
import { ToggleContext } from '../../../src/context/ToggleContext'
import { NewsContext } from "../../../src/context/NewsContext"

export default function NewsAdmin() {
  const { register, handleSubmit } = useForm()

  const { theme } = useContext(ToggleContext)
  const { newsEdit, getNews, updateNews, deleteNews } = useContext(NewsContext)

  const handleUpdate = (data: any) => {
    if (data.category == '0') {
      alert('error')
    } else {
      updateNews(data)
    }
  }

  useEffect(() => {
    if (Object.keys(newsEdit).length == 0) {
      getNews('refresh')
    }
  }, [])

  return (
    <>
      <Head>
        <title>YourneuS | Edit News</title>
      </Head>

      <Background>
        <Header />
        <Container>
          <div>
            <div className={cx(
              theme ? 'dark' : ''
            )}>
              <h2>Update your news { newsEdit?.title }</h2>
              <form onSubmit={handleSubmit(handleUpdate)}>
                <input {...register('title')} type="text" name="title" id="title" placeholder="Title" defaultValue={ newsEdit?.title } />
                <select {...register('category')} name="category" id="category">
                  <option value="0">Select Category</option>
                  <option value="Culture">Culture</option>
                  <option value="Economy">Economy</option>
                  <option value="Education">Education</option>
                  <option value="Famous">Famous</option>
                  <option value="Information">Information</option>
                  <option value="Sport">Sport</option>
                </select>
                <textarea {...register('content')} name="content" id="content" placeholder="Content"  defaultValue={ newsEdit?.content } />
                <div>
                  <button type="submit">Update</button>
                  <button onClick={() => deleteNews(newsEdit?.id)}>Delete</button>
                </div>
              </form>
            </div>
          </div>
         
        </Container>
      </Background>
    </>
  )
}