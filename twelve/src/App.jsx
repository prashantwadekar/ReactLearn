import React from "react";
import ReactDOM from "react-dom";
import Amazon from "./Amazon";
import Jio from "./Jio";

const Choicemovie = "Amazon";
// const Fmovie = () => {
//   if (Choicemovie === "amazon") {
//     return <Amazon />;
//   } else {
//     return <Jio />;
//   }
// };

const App = () => {
  return(
  <>
  <h5>Web Serirs Choice</h5>
    {/* <Fmovie /> */}
    {Choicemovie==="Amazon" ? <Amazon/>:<Jio/>}
  </>
  );
};

export default App;
