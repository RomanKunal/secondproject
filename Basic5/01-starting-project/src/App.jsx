import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">

      <TimerChallenge title="Easy" targettime={1}/>
      <TimerChallenge title="Not easy" targettime={5}/>
      <TimerChallenge title="Getting tough" targettime={10}/>
      <TimerChallenge title="Pros only" targettime={15}/>
      </div>
      
    </>
  );
}

export default App;
