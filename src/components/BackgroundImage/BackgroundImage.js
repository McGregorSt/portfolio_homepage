import React from "react";

import src from "../../assets/backgroundImage/marvin.jpg";
import * as img from "./BackgroundImage.css";

const BackgroundImage = () => {
  return (
    <div className="backgroundImage">
      <img src={src} alt="background" />
    </div>
  );
};

export default BackgroundImage;
