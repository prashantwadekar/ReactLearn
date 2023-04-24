import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
const Amazon = () => {
  return (
    <Card
      key={Sdata[0].id}
      src={Sdata[0].src}
      mname={Sdata[0].mname}
      desc={Sdata[0].desc}
      href={Sdata[0].href}
    />
  );
};
export default Amazon;
