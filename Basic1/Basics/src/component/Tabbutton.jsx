export function Tabbutton({children,onSelect}){
    return (
    // <li>
    //     <button onClick={()=>{
    //         console.log("Hello World");
    //     }}>{children}</button>
    // </li>

    <li>
        <button className="buttons" onClick={onSelect}>{children}</button>
    </li>
    )
}


// Arrow function is not the right practise for calling the function on event method 