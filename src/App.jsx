import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(15)
  const addvalue=()=>{
    counter+=1;
    console.log(counter);
    setcounter(counter);
  }
  const removevalue=()=>{
    counter-=1;
    console.log(counter);
    setcounter(counter);

  }

  return (
  <>
    <h1>This is project</h1>
    <h3>Counter value : {counter}</h3>
    <button onClick={addvalue}>Add Value</button>
    
    <button onClick={removevalue}>Remove </button>
  </>  
  )
}

export default App
