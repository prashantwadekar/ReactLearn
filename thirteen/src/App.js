import React, { useState } from "react";
import './App.css';
const App=()=>{
  let CurrTime=new Date().toLocaleTimeString();
  const state=useState();
  const[time,SetTime]=useState(CurrTime);
  const GetTime=()=>{
    CurrTime=new Date().toLocaleTimeString();
    SetTime(CurrTime);
  }
  return(
    <>
      <h1>{CurrTime}</h1>
      <button onClick={GetTime}>Get Time</button>
    </>
  );
}
export default App;