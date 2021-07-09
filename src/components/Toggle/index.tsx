import { Container } from './style'
import { useContext } from 'react'
import { ToggleContext } from "../../context/ToggleContext"

const Toggle = () => {
  const { theme, toggleTheme } = useContext(ToggleContext)

  return (
    <>
      <Container>
        <label className="switch">
          <input type="checkbox" checked={theme} onChange={toggleTheme} className="input" />
          <span className="slider"/>
        </label>
      </Container>
    </>
  )
}

export { Toggle }