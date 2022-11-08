import React from "react";
import CardsProps from "./CardsProps";
import pix from "./Image/pix.jpg";

const Deputy = () => {
  return (
    <div>
      <CardsProps
        but2="submit"
        but="vote"
        pix={pix}
        NameTag="Samuel gbemi"
        category="social secretary"
      />
    </div>
  );
};

export default Deputy;
