
import {useState, useMemo, memo} from 'react'
import './App.css' 
// import Counter from './Components/Counter.jsx'

// 

// sin useMemo 
// function ShowValue({params}) {
//   console.log(`Showvalue render, ${params.value}`);

//   return <div className="value">{params.value}</div>

// }

// const memoShowValue= memo(ShowValue);
// function App() {
//   const [counter,setCounter] = useState(0);
//   const [value,setValue] = useState('ON');

//   console.log(`App re-render, ${counter}`);

//   const changeCounter = ()=> {
//     setCounter(counter+1)
//   };
//   const changeValue = ()=> {
//     setValue(value === 'ON'?'OFF':'ON')
//   }
//   return (
//     <div className="container">
// <h1>Exemplo de useMemo</h1>
// <div className="items">
// <MemoShowValue params={{ value }} />
// </div>
// <div className="actions">
// <button onClick={changeCounter} className="btn btn-teal">
// Re-render
// </button>

// <button onClick={changeValue} className="btn btn-sky">
// Change Value
// </button>
// </div>
// </div>
//   )
// }

// export default App
// con useMemo 
function App() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState('ON');
  const params = useMemo(() => ({ value }), [value]);
  
  console.log(`App re-render, ${counter}`);
  
  const changeCounter = () => {
  setCounter(counter + 1);
  };
  
  const changeValue = () => {
  setValue(value === 'ON' ? 'OFF' : 'ON');
  };
  
  return (
  <div className="container">
  <h1>Exemplo useMemo </h1>
  <div className="items">
  <MemoShowValue params={params} />
  </div>
  <div className="actions">
  <button onClick={changeCounter} className="btn btn-teal">
  Re-render
  </button>
  
  <button onClick={changeValue} className="btn btn-sky">
  Change Value
  </button>
  </div>
  </div>
  );
  
}

export default App