import { useRef, useState } from "react";

export default function Player() {
  const [enterplayername,setplayername]=useState(null);
  const playername=useRef();
  // const [submitted,setsubmitted]=useState(false);

  // function handlechange(event){
  //   setsubmitted(false);
  //   setplayername(event.target.value);
  // }

  function handleclick(){
    setplayername(playername.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enterplayername ?enterplayername: "unknown entity"}</h2>
      <p>
        <input type="text" ref={playername} />
        <button onClick={handleclick}>Set Name</button>
      </p>
    </section>
  );
}
