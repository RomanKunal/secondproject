import { useState } from "react"

export default function TimerChallenge({title,targettime}){
    const [timerStart,setTimerStart]=useState(false);
    const [timerExpired,settimeExpired]=useState(false);

    function handleStart(){
        setTimeout(() => {
            settimeExpired(true);
        }, targettime*1000);
        setTimerStart(true);
    }
    return(
        
        <section className="challenge">
        <h2>{title} </h2>
        {timerExpired &&<p>You Lost</p>}
        <p className="challenge-time">
        {targettime} second {targettime>1 ? 's' :" "}
        </p>
        <p>
        <button onClick={handleStart}>{timerStart ? 'Stop ':'Start'}Challenge</button>
        </p>
        <p className={timerStart?'active':undefined}>
        {timerStart?'Time is running...':'Inactive'}</p>
        </section>
    );
}