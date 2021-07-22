import Router from 'next/router'
import Head from 'next/head'

export default function Custom404() {
  return (
    <>
    <Head>
      <title>YourneuS | 404</title>
    </Head>

    <div style={{
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'center',
      'textAlign': 'center',
      'height': '100vh'
    }}>
      <div style={{
        'display': 'grid',
        'gridTemplateColumns': '1fr',
        'gap': '2rem',
        'fontFamily': 'Roboto'
      }}>
        <h1 style={{
          'fontSize': '3rem'
        }}>YourneuS</h1>
        <h2 style={{
          'fontSize': '3rem'
        }}>404 | Page Not Found</h2> 
        <a onClick={() => Router.push('/')} style={{
          'cursor': 'pointer',
          'fontSize': '2.2rem'
        }}>Back to Home</a>
      </div>
    </div>
    </>
  )
}