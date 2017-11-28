import React from "react";
import "./Home.css";
import Skills1 from "../../components/Skills1";
import Education from "../../components/Education";
import Footer from "../../components/Footer";

let Home = () => (
  <div className="container-fluid home">
  
      <Education />

  <div className="row">
        <Skills1/>
  </div>
</div>
)

export default Home;
