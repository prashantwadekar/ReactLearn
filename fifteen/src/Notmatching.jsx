import React from "react";

const Notmatching = (props) => {
  let {x,y,z}=props;
  return (
    <>
     <h6>{x}{y}{z}</h6>
      <p>This is Not Matching</p>
    </>
  );
};
export default Notmatching;
