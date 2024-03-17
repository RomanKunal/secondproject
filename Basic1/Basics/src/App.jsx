import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './component/Footer'
import { Tabbutton } from './component/Tabbutton'


const read=["Nhi karunga call","Chalna","Bhai mat kar tu"];

function getrandom(max){
  return Math.floor(Math.random()*(max+1));
}



function Car(props){
  return <h1 className='head1'>My fav car is {props.brand}</h1>;
}



function App() {
  const [count, setCount] = useState("Select any button");

  function handleclick(selectbutton){
    setCount(selectbutton);
    console.log(selectbutton);
    
  }

  return (
    <>
      <h1 className='head1'>This is the heading line for now</h1>
      <h2 className='head2'>Call now bro {read[getrandom(2)]}</h2>
      <Car brand="Rangerover"/>
      <Car brand="Mustang"></Car>
      <Footer/>
      <Tabbutton onSelect={()=>handleclick("Pressed")}>Press It</Tabbutton>
      <Tabbutton onSelect={()=>handleclick("Clicked guys")}>Click me</Tabbutton>
      {count}
       {/* that how u change the ui using use state hook */}
    </>
  )
}

export default App
