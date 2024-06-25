import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Model3Deatil from './components/vehicles/model3/Model3Deatil.jsx';
import Cybertruck from './components/vehicles/cybertruck/Cybertruck.jsx';
import ModelYDetail from './components/vehicles/modelY/ModelYDetail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/model3",
    element: <Model3Deatil/>,
  },
  {
    path: "/modely",
    element: <ModelYDetail/>,
  },
  {
    path: "/cybertruck",
    element: <Cybertruck/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
