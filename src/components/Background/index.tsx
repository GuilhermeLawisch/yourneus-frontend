import { Container } from './style'
import cx from 'classnames'
import { useContext } from 'react'
import { ToggleContext } from "../../context/ToggleContext"

const Background = ({ children }:any) => {
  const { theme } = useContext(ToggleContext)

  return (
    <>
      <Container>
        <div className={cx(
          theme ? 'dark' : 'white'
        )}>
          { children }
        </div>
      </Container>
    </>
  )
}

export { Background }