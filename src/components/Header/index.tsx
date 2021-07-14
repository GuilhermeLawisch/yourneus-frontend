import { Container } from './style'
import cx from 'classnames'
import Router from 'next/router'
import { Toggle } from '../Toggle'

const Header = () => {
  return (
    <>
      <Container>
        <div>
          <div>
            <h1><a onClick={() => Router.push("/")}>YourNeus</a></h1>
          </div>
          <div className={cx(
            'section'
          )}>
            <nav>
              <ul>
                <li><a onClick={() => Router.push("/news/register")}>New News</a></li>
                <li><a onClick={() => Router.push("/signin")}>Sign In</a></li>
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