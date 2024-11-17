import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/frontend_assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
      For better experience,download the  
        <br />
        Tomato App now
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store}></img>
        <img src={assets.app_store}></img>
      </div>
    </div>
  );
};

export default AppDownload;
