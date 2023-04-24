import React from 'react';
import ReactDOM from 'react-dom';
import {add,sub,mul,div} from './Calc';
function App()
{
return(
  <ul>
    <li>Addition of two number is {add(10,12)}</li>
    <li>Sub of two number is {sub(10,12)}</li>
    <li>Mul of two number is {mul(10,12)}</li>
    <li>Div of two number is {div(10,12)}</li>
  </ul>
);
}

export default App;