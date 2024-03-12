import { BrowserRouter ,Route , Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './Home'
import Contacto from './Contacto'
import Beer from './Beer'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App/>}/>
    <Route path= '/home' element={<Home/>}/>
    <Route path= '/contacto' element={<Contacto/>}/>
    <Route path= '/beer/:id' element={<Beer/>}/>
    
    </Routes>
    </BrowserRouter>
  
)
