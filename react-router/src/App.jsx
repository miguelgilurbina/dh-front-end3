import {Link} from "react-router-dom"
import './App.css'

function App() {
  

  return (
    <div>
      
    <nav>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/faqs'>Faqs</Link>

    </nav>
    </div>
  )
}

export default App
