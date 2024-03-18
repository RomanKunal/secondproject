import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
function App() {
  

  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
          <Player name="Player 1" symbol="X"/>
          <Player name="Player 2" symbol="0"/>

        </ol>
        <GameBoard/>
      </div>
      LOG
    </main>
  )
}

export default App
