import { useContext, useState } from 'react'
import cx from 'classnames'
import Router from 'next/router'

import { Container } from './style'
import { Toggle } from '../Toggle'
import { AuthContext } from '../../context/AuthContext'
import { ToggleContext } from '../../context/ToggleContext'
import { NewsContext } from '../../context/NewsContext'

const Header = () => {
  const { theme } = useContext(ToggleContext)
  const { isAuthenticated, user } = useContext(AuthContext)
  const { getSearchNews } = useContext(NewsContext)

  const [searchOn, setSearchOn] = useState<boolean>(true)
  const [searchValue, setSearchValue] = useState<string>('')

  const HandleSearch = () => {
    if (!searchOn) {
      if (searchValue != '') {
        getSearchNews(searchValue)
      } else {
        setSearchOn(!searchOn)
      }
    } else {
      setSearchOn(!searchOn)
      document.getElementById('name').focus()
    }
  }

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
            'right'
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
                <li className={cx(
                  'search',
                  searchOn ? 'on' : 'off'
                )}>
                  <input type="text" name="name" id="name" placeholder=" Search" onChange={event => setSearchValue(event.target.value)} />
                  <svg onClick={HandleSearch} width="32" height="32" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"  enable-background="new 0 0 129 129" fill={ theme ? '#f8f8f2' : '#29292e' }>
                    <path d="M51.6,96.7c11,0,21-3.9,28.8-10.5l35,35c0.8,0.8,1.8,1.2,2.9,1.2s2.1-0.4,2.9-1.2c1.6-1.6,1.6-4.2,0-5.8l-35-35   c6.5-7.8,10.5-17.9,10.5-28.8c0-24.9-20.2-45.1-45.1-45.1C26.8,6.5,6.5,26.8,6.5,51.6C6.5,76.5,26.8,96.7,51.6,96.7z M51.6,14.7   c20.4,0,36.9,16.6,36.9,36.9C88.5,72,72,88.5,51.6,88.5c-20.4,0-36.9-16.6-36.9-36.9C14.7,31.3,31.3,14.7,51.6,14.7z"/>
                  </svg>
                </li>
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