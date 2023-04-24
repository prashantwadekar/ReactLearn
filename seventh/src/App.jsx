import React from 'react';
import ReactDOM from 'react-dom';

function App(){
    let currDate=new Date();
let currTime=currDate.getHours();
let greeting='';
let cssStyle={};
if(currTime>=1&&currTime<12)
{
  greeting="Good Morning";
  cssStyle.color='green';
}
else if(currTime>=12&&currTime<19)
{
  greeting="Good Evening";
  cssStyle.color='orange';
}
else 
{
  greeting="Good Night"; 
  cssStyle.color='silver';
}
return (  
<>
<h1>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>
</>
)
}
export default App;