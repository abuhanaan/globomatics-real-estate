import logo from "./GloboLogo.png";
import { useNavigate } from "react-router-dom";

import React from "react";

const Header = ({ subtitle }) => {
  const navigate = useNavigate();
  const loadHome = () => {
    navigate("/");
  };
  return (
    <header className="row">
      <div className="col-md-5">
        <img src={logo} alt="logo" className="logo" onClick={loadHome} />
      </div>
      <div className="col-md-7 mt-5 subtitle">{subtitle}</div>
    </header>
  );
};

export default Header;
