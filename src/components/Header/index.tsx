import { Container } from './style'
import cx from 'classnames'
import { Toggle } from '../Toggle'

const Header = () => {
  return (
    <>
      <Container>
        <div>
          <div>
            <h1>YourNeus</h1>
          </div>
          <div className={cx(
            'section'
          )}>
            <nav>
              <ul>
                <li><a href="/news/register">NewNews</a></li>
                <li><a href="/signin">Sign In</a></li>
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