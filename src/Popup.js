import React from "react";
import "./Popup.css";
import metamask from "./components/metamask.jpg";
import walletconnect from "./components/walletconnect.jpg";
import x from "./components/x.jpg";
import vector from "./components/vector.jpg";
// import Popup from "./Popup";

const Popup = () => {
  return (
    <div className="popup">
      <div className="pop-content">
        <div className="pop-box">
        <div className="top">
        <h3>Connect wallet</h3><img src={x} alt="x-logo" />
        </div>
   
        <p className="pop-para">Connect your preferred wallet:</p>
        <div className="metamask">
          <img width={40} src={metamask} alt="metamask-logo" /><h4>Metamask</h4>
          <img className="vector-icon" src={vector} alt="vector-logo" />
        </div>
        <div className="walletconnect">
          <img src={walletconnect} alt="walletconnect-logo" /><h4>Walletconnect</h4>
          <img className="vector-icon" src={vector} alt="vector-logo" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Popup;
