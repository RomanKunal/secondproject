import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
function App() {
  const [activeplayer,setactiveplayer] = useState('X');

  function handleselectsquare(){
    setactiveplayer((cuActivePlayer)=>cuActivePlayer ==='X'?'0':'X');
  }
  
  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player name="Player 1" symbol="X" isactive={activeplayer==='X'}/>
          <Player name="Player 2" symbol="0" isactive={activeplayer === '0'}/>

        </ol>
        <GameBoard onSelectSquare={handleselectsquare} gameboardsymbol={activeplayer}/>
      </div>
      LOG
    </main>
  )
}

export default App
