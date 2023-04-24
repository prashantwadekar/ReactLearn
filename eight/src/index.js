import React from "react";
import ReactDOM from "react-dom";
import youtuber, { country,Names,Mynames} from "./App";
ReactDOM.render(
  <>
    <ol>
      <li>Prashant</li>
      <li>{youtuber}</li>
      <li>{country}</li>
      <li>{Names()}</li>
      <li>{Mynames()}</li>
    </ol>
  </>,
  document.getElementById("root")
);
