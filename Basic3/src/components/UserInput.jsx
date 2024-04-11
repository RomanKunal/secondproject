import { useState } from "react"



export default function UserInput({ onChange, userInput}){

    

    
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" 
                value={userInput.initialinvestment}hy2hgv x
                required onChange={(event)=>onChange('initialinvestment',event.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" value={userInput.annualinvestment}
                required onChange={(event)=>onChange('annualinvestment',event.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" value={userInput.expectedreturn}
                required onChange={(event)=>onChange('expectedreturn',event.target.value)}
                />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" value={userInput.duration}
                required onChange={(event)=>onChange('duration',event.target.value)}
                />
            </p>
        </div>
    </section>
    
}