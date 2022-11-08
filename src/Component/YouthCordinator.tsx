import React from "react";
import CardsProps from "./CardsProps";
import pix from "./Image/pix.jpg";

const YouthCordinator = () => {
  return (
    <div>
      <CardsProps
        but2="submit"
        but="vote"
        pix={pix}
        NameTag="bukola gbemi"
        category="social secretary"
      />
    </div>
  );
};

export default YouthCordinator;
