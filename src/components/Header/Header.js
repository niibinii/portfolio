import React from "react";
import {Adinkra} from "react-adinkra";
import "./Header.css";

let Header = (props) => (
  <div>
  <div className="header">
    <div className="name">
      <h4>Marcus</h4>
      <Adinkra className="adinkra" name={'adinkrahene'}/>
      <h4>Olan </h4>
    </div>
    <div className="p-skills"><p >Web Developer,Instructional Technologist, Entrepreneur </p></div>

    <div className="subheader"></div>
  </div>
  <div className="image"></div>
  </div>
)
export default Header;
