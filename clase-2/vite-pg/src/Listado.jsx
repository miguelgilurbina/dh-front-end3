const Listado =(tarea, setList) => {

    const [counter, setCounter] = useState(0)
  
      const addCart = () => {
        setList((prevState) => 
        [
          ...prevState, 
          {
            ...tarea, 
          
          }
        ])
      }
    return (
        <div>
            <h1>{tarea}</h1>
            <button onClick={addCart}>Añadir a la lista</button>
        </div>
      )
    }
  
  export default Listado