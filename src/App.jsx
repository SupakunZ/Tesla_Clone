import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/home/HomePage'
import Option from './components/option/Option'
import Model3Deatil from './components/vehicles/model3/Model3Deatil'

export const MenuContext = createContext();

function App() {
  const [menu, setMenu] = useState(false)

  return (
    <MenuContext.Provider value={{menu, setMenu}}>
      {menu ? <Option/> : <HomePage/>}
    </MenuContext.Provider>
  )
}

export default App
