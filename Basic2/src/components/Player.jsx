import { useState } from "react";





export default function Player({name,symbol}){
    const [Playername,setPlayername]=useState(name);
    function handlechange(event){
        setPlayername(event.target.value);
    }
    const [isEditing,setEditing] =useState(false);
    
    function handleclick(){
        setEditing(!isEditing);
    }
    let playername=<span className="player-name">{Playername}</span>;
    let btn='Edit';
    if(isEditing){
        playername=<input type="text" required value={Playername} onChange={handlechange}/>
        btn='Save';
    }

    return(
        <li>
            <span className="player">
                {playername}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleclick}>{btn}</button>
        </li>
    );
}