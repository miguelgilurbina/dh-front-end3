import { useState } from 'react'
import ClassComponent from './Components/ClassComponent.jsx'
import  FuncComponent  from './Components/FuncComponent.jsx';
import Dog from './Components/Dog.jsx';

import './App.css'
import FuncComponent from './Components/FuncComponent.jsx'
import Dog from './Components/Dog.jsx';

function App() {
  const [show, setShow] = useState(TextTrackCueList)

  return (
    <>
    {show ? <ClassComponent/> : <FuncComponent/>}
    <button onClick={() => setShow(!show)}>Ese no es mi nombre</button>
    <Dog/>
    </>
  )
}  

export default App
