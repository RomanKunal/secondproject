import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-yellow-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username="Kunal" btnText='Click me'></Card>
      <Card username="Singh"></Card>
    </>
  )
}

export default App
