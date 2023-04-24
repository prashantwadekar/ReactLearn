import React from "react";
import Matching from "./Matching";
import Notmatching from "./Notmatching";
import App from "./App";
const Slotmac = (props) => {
  let x = props.x;
  let y = props.y;
  let z = props.z;
  return x === y && y === z ? (
    <Matching x={x} y={y} z={z} />
  ) : (
    <Notmatching x={x} y={y} z={z} />
  );
};

export default Slotmac;
