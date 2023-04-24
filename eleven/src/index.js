import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./card.css";
import Sdata from "./Sdata";

ReactDOM.render(
  <>
  <h1 className="movie_name">Five Cards using React</h1>
  {Sdata.map((val)=>{
   return(
      <Card
      key={val.id}
      src={val.src}
      mname={val.mname}
      desc={val.desc}
      href={val.href}
   />
   );
}
)}
  </>,
  document.getElementById("root")
);
