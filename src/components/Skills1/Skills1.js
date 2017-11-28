import React from "react";
import "./Skills1.css";

let Skills1 = (props) => (
  <div className="container high">
    <h3>Skills</h3>
    <div className="row skills">


      {props.data2.map((item, index) => (
        <div className="col-sm-2" key={item.name + index}>
          <div className="img-custom">
            <i class={item.image}></i>
          </div>
        </div>
      ))
}

    </div>

    <div className="row other">
      <div className="col">
        <h3>Other Skills:</h3>
        <p>Comptia Network+</p>,<p>ASP.Net</p>,<p>SQL</p>,<p>Chai</p>, <p>Redux</p>
      </div>

    </div>
  </div>
)
export default Skills1;
