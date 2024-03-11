import { createRoot } from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './App'
import Home from './Home'
import About from './About'
import Faqs from './Faqs'

// Hay una discrepancia en esta parte ya que el material que se entrega en pg está desactualizado, React 18 no soporta React.Dom 
// El error por el cual no se está renderizando está acá. 



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App/>}>
  <Route path='/home' element={<Home/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/faqs' element={<Faqs/>} />
  </Route>
  </Routes>
  </BrowserRouter>

  )

 