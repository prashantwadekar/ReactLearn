import React, { useState } from "react";
import './App.css';
let count=0;
const App=()=>{
  const state=useState();
  const[count,setcount]=useState(0);
  const Click=()=>{
    setcount(count+1);
  }
  
  return(
    <>
      <h1>{count}</h1>
      <button onClick={Click}>Click me</button>
    </>
  );
}
export default App;