import { useState } from "react";
import Header from "./components/Headers.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx";
function App() {
  const [userInput,setuserinput]=
    useState({
        initialinvestment:10000,
        annualinvestment:1200,
        expectedreturn:6,
        duration:10

    });


    function handlechange(inputidentifier,newvalue){
      setuserinput(prevUserinput=>{
          return {
              ...prevUserinput,
              [inputidentifier]:newvalue
          };
      });

  }
  return (
    <>
    <Header />
    <UserInput UserInput={userInput} onChange={handlechange}/>
    <Results input={userInput}/>
    </>
  )
}

export default App
