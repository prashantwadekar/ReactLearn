import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./card.css";
import Sdata from "./Sdata";

ReactDOM.render(
  <>
  <h1 className="movie_name">Five Cards using React</h1>
    <Card
       src={Sdata[0].src}
       mname={Sdata[0].mname}
       desc={Sdata[0].desc}
       href={Sdata[0].href}
    />

<Card
       src={Sdata[1].src}
       mname={Sdata[1].mname}
       desc={Sdata[1].desc}
       href={Sdata[1].href}
    />
    <Card
       src={Sdata[1].src}
       mname={Sdata[1].mname}
       desc={Sdata[1].desc}
       href={Sdata[1].href}
    />
    <Card
       src={Sdata[1].src}
       mname={Sdata[1].mname}
       desc={Sdata[1].desc}
       href={Sdata[1].href}
    />
    <Card
       src={Sdata[1].src}
       mname={Sdata[1].mname}
       desc={Sdata[1].desc}
       href={Sdata[1].href}
    />
    <Card
       src={Sdata[1].src}
       mname={Sdata[1].mname}
       desc={Sdata[1].desc}
       href={Sdata[1].href}
    />
  </>,
  document.getElementById("root")
);
