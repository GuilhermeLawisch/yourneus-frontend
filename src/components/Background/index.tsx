import { Container } from './style'
import cx from 'classnames'
import { ReactNode, useContext } from 'react'
import { ToggleContext } from "../../context/ToggleContext"

type IBackground = {
  children: ReactNode;
}

const Background = (props: IBackground) => {
  const { visible, theme } = useContext(ToggleContext)

  return (
    <>
      <Container>
        <div className={cx(
          visible ? 'visible' : 'no-visible',
          theme ? 'dark' : 'white'
        )}>
          { visible ? <></> : <i /> }
          { visible ? props.children : <></> }
        </div>
      </Container>
    </>
  )
}

export { Background }