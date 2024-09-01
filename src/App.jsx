import { createContext, useState } from 'react'
import './App.css'
import HomePage from './components/home/HomePage'
import Option from './components/option/Option'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Model3Deatil from './components/vehicles/model3/Model3Deatil.jsx';
import Cybertruck from './components/vehicles/cybertruck/Cybertruck.jsx';
import ModelYDetail from './components/vehicles/modelY/ModelYDetail.jsx';

export const MenuContext = createContext();

function App() {
  const [menu, setMenu] = useState(true)

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      <BrowserRouter>
        <Option />
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/model3'} element={<Model3Deatil />} />
          <Route path={'/modely'} element={<ModelYDetail />} />
          <Route path={'/cybertruck'} element={<Cybertruck />} />
        </Routes>
      </BrowserRouter>
    </MenuContext.Provider>
  )
}

export default App
