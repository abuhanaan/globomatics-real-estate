import logo from "./GloboLogo.png";

import React from "react";

const Header = () => {
  return (
    <header className="row">
      <div className="col-md-5">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="col-md-7 mt-5 subtitle">
        Providing Houses All Over The World
      </div>
    </header>
  );
};

export default Header;
