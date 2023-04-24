import React from 'react';
import Sdata from "./Sdata";
import Card from "./Card";
const Jio = () => {
  return (
    <Card
      key={Sdata[2].id}
      src={Sdata[2].src}
      mname={Sdata[2].mname}
      desc={Sdata[2].desc}
      href={Sdata[2].href}
    />
  );
};
export default Jio;
