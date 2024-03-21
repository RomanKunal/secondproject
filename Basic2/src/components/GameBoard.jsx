import { useState } from "react";


const initialgameboard=[
    [null,null,null],
    [null,null,null],
    [null,null,null],
];



export default function GameBoard({onSelectSquare,gameboardsymbol}){
    const [gameboard,setgameboard]=useState(initialgameboard)
    function handlesquare(rowIndex,colIndex){
        setgameboard((prevgameboard)=>{
            const updateboard=[...prevgameboard.map(innerArray => [...innerArray])];
            updateboard[rowIndex][colIndex]=gameboardsymbol;
            return updateboard;
        });
        onSelectSquare();
    }
    
    return <ol id='game-board'>
        {gameboard.map((row,rowIndex)=>(
            <li key={rowIndex}>
                <ol>
                {row.map((playersymbol,colIndex)=>(
                    <li key={colIndex}>
                    <button onClick={()=>handlesquare(rowIndex,colIndex)}>{playersymbol}</button>
                    </li>
                ))}
                </ol>
            </li>
        ))}
    </ol>
}