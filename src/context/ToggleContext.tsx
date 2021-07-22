import { useState } from 'react';
import { ReactNode, createContext } from 'react';

interface IToggleContext {
  visible: boolean;
  theme: boolean;
  toggleVisible: (visible: boolean) => void;
  toggleTheme: () => void;
}

interface IProps {
  children: ReactNode;
}

export const ToggleContext = createContext({} as IToggleContext);

const ToggleContextProvider = (props: IProps) => {
  const [visible, setVisible] = useState(false)
  const [theme, setTheme] = useState<boolean>(false)

  const toggleVisible = (visible: boolean) => {
    setVisible(visible)
  } 

  const toggleTheme = () => {
    setTheme(!theme)
  }

  return (
    <ToggleContext.Provider value={{ 
      visible,
      theme, 
      toggleVisible,
      toggleTheme 
    }}>
      {props.children}
    </ToggleContext.Provider>
  )
}

export { ToggleContextProvider };