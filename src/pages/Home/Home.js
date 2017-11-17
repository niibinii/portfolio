import React from "react";
import "./Home.css";
import Skills from "../../components/Skills";
import Education from "../../components/Education";
import Footer from "../../components/Footer";

let Home = () => (
  <div className="container-fluid home">
    <div className="row">
      <div className="col-md-4">
        <Skills/>
      </div>
      <div className="col-md-8">
        <Education/>
      </div>
</div>
</div>
)

export default Home;
