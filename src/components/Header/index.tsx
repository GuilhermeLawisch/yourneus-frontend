import { Container } from './style'
import cx from 'classnames'
import Router from 'next/router'
import { Toggle } from '../Toggle'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { ToggleContext } from '../../context/ToggleContext'

const Header = () => {
  const { theme } = useContext(ToggleContext)
  const { isAuthenticated, user } = useContext(AuthContext)

  return (
    <>
      <Container>
        <div>
          <div className={cx( 
            'left',
            theme ? 'dark' : ''
          )}>
            <h1><a onClick={() => Router.push("/")}><span>Y</span>ourneu<span>S</span></a></h1>
            <Toggle />
          </div>
          <div className={cx(
            'section'
          )}>
            <nav>
              <ul>
                { isAuthenticated ? (
                  <>
                    <li><a onClick={() => Router.push("/news/create")}>Add News</a></li>
                    <li><a onClick={() => Router.push(`/user/${user.id}`)}>{ user?.username }</a></li>
                  </>
                ) : (
                  <>
                    <li><a onClick={() => Router.push("/user/signin")}>Sign In</a></li>
                    <li><a onClick={() => Router.push("/user/signup")}>Sign Up</a></li>
                  </>
                )}
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