//create create app to show good moring good evening and good night with time in different style
import react from 'react';
import ReactDOM from 'react-dom';
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
ReactDOM.render(
  <>
  <h1>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>
  </>
  ,document.getElementById('root')
);