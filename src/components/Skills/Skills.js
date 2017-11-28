import React from "react";
import "./Skills.css";

let Skills = (props) => (
  <div className="container high">
    <h3>Skills</h3>
    {
      props.data.map((item, index) => (
        <div className="row skills" key={item.name + index}>
          <div className="col-md-8">
            <div className="skill-name">
              <p>{item.name}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div style={{backgroundImage: `url("${item.image}")`}} className="img-custom"></div>
          </div>
        </div>
      ))
    }
  </div>
)
export default Skills;
