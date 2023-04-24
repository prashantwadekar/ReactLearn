import react from 'react';
import ReactDOM from 'react-dom';
const CurrDate=new Date().toLocaleDateString();
const CurrTime=new Date().toLocaleTimeString();
ReactDOM.render(
  <>
    <h1>Display Current Date and Time</h1>
    <p>Current Date is :{CurrDate}</p>
    <p>Current Time is :{CurrTime}</p>
  </>,
  document.getElementById('root')
);

