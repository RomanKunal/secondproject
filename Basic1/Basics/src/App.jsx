import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const read=["Nhi karunga call","Chalna","Bhai mat kar tu"];

function getrandom(max){
  return Math.floor(Math.random()*(max+1));
}

function Car(props){
  return <h1>My fav car is {props.brand}</h1>;
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is the heading line for now</h1>
      <h2>Call now bro {read[getrandom(2)]}</h2>
      <Car brand="Rangerover"/>
      <Car brand="Mustang"></Car>
    </>
  )
}

export default App
