import { Container } from './style'
import cx from 'classnames'
import Router from 'next/router'
import { Toggle } from '../Toggle'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'

const Header = () => {
  const { isAuthenticated, user } = useContext(AuthContext)

  return (
    <>
      <Container>
        <div>
          <div>
            <h1><a onClick={() => Router.push("/")}>YourneuS</a></h1>
          </div>
          <div className={cx(
            'section'
          )}>
            <nav>
              <ul>
                <li><a onClick={() => Router.push("/news/create")}>New News</a></li>
                { isAuthenticated ? (
                  <li><a onClick={() => Router.push("/user")}>{ user?.username }</a></li>
                ) : (
                  <li><a onClick={() => Router.push("/user/signin")}>Sign In</a></li>
                )}
                <Toggle />
              </ul>
            </nav>
            <div>
              <div id="one" />
              <div id="two" />
              <div id="three" />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export { Header }