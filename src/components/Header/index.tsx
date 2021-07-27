import { useState, useContext, useEffect } from 'react'
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

  const [show, setShow] = useState<boolean>(true);
  const [searchOn, setSearchOn] = useState<boolean>(true)
  const [searchValue, setSearchValue] = useState<string>('')
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 500);
  };

  
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

  const ToggleOpen = () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    
    setShow(!show)
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  
  return (
    <>
      <Container>
        <div className="header">
          <div className={cx(
            'left',
            show ? '' : 'on',
            theme ? 'light-left' : 'dark-left'
          )}>
            <nav>
              <ul>
                { isAuthenticated ? (
                  <>
                    <li onClick={() => Router.push(`/user/${user.id}`)} className="userinfo">
                      { user?.avatar_url ? (
                        <img src={ user?.avatar_url } alt={ user?.username } className="avatar" />
                        ) : (
                        <svg className="octicon octicon-mark-github v-align-middle avatar-github" width="36" height="36" viewBox="0 0 16 16" version="1.1" aria-hidden="true" fill={ theme ? '#f8f8f2' : '#29292e' }>
                          <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                      )}
                      <a>{ user?.username }</a>
                    </li>
                    <li><a onClick={() => Router.push("/news/create")}>Add News</a></li>
                  </>
                ) : (
                  <>
                    <li><a onClick={() => Router.push("/user/signin")}>Sign In</a></li>
                    <li><a onClick={() => Router.push("/user/signup")}>Sign Up</a></li>
                  </>
                )}
                { isDesktop ? (
                  <></>
                ) : (
                  <li className={cx(
                    'search',
                    searchOn ? 'on' : 'off'
                  )}>
                    <input type="text" name="name" id="name" placeholder=" Search" onChange={event => setSearchValue(event.target.value)} />
                    <svg onClick={HandleSearch} width="32" height="32" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"  enableBackground="new 0 0 129 129" fill={ theme ? '#f8f8f2' : '#29292e' }>
                      <path d="M51.6,96.7c11,0,21-3.9,28.8-10.5l35,35c0.8,0.8,1.8,1.2,2.9,1.2s2.1-0.4,2.9-1.2c1.6-1.6,1.6-4.2,0-5.8l-35-35   c6.5-7.8,10.5-17.9,10.5-28.8c0-24.9-20.2-45.1-45.1-45.1C26.8,6.5,6.5,26.8,6.5,51.6C6.5,76.5,26.8,96.7,51.6,96.7z M51.6,14.7   c20.4,0,36.9,16.6,36.9,36.9C88.5,72,72,88.5,51.6,88.5c-20.4,0-36.9-16.6-36.9-36.9C14.7,31.3,31.3,14.7,51.6,14.7z"/>
                    </svg>
                  </li>
                )}
              </ul>
            </nav>
            <div className="menu-toggle" onClick={() => ToggleOpen()}>
              <div className="one" />
              <div className="two" />
              <div className="three" />
            </div>
          </div>
          <div className={cx( 
            'center',
            theme ? 'dark' : ''
          )}>
            <h1><a onClick={() => Router.push("/")}><span>Y</span>ourneu<span>S</span></a></h1>
          </div>
          <div className="right">
            { isDesktop ? (
              <li className={cx(
                'search',
                searchOn ? 'on' : 'off'
              )}>
                <input type="text" name="name" id="name" placeholder=" Search" onChange={event => setSearchValue(event.target.value)} />
                <svg onClick={HandleSearch} width="32" height="32" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"  enableBackground="new 0 0 129 129" fill={ theme ? '#f8f8f2' : '#29292e' }>
                  <path d="M51.6,96.7c11,0,21-3.9,28.8-10.5l35,35c0.8,0.8,1.8,1.2,2.9,1.2s2.1-0.4,2.9-1.2c1.6-1.6,1.6-4.2,0-5.8l-35-35   c6.5-7.8,10.5-17.9,10.5-28.8c0-24.9-20.2-45.1-45.1-45.1C26.8,6.5,6.5,26.8,6.5,51.6C6.5,76.5,26.8,96.7,51.6,96.7z M51.6,14.7   c20.4,0,36.9,16.6,36.9,36.9C88.5,72,72,88.5,51.6,88.5c-20.4,0-36.9-16.6-36.9-36.9C14.7,31.3,31.3,14.7,51.6,14.7z"/>
                </svg>
              </li>
            ) : (
              <></>
            )}
            <Toggle />
          </div>
        </div>
      </Container>
    </>
  )
}

export { Header }