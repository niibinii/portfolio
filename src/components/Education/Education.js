import React from "react";
import "./Education.css";

let Education = (props) => (
  <div className="container high">
    <h3>Education</h3>
    {
      props.data.map((item, index)=>(
        <div className="row education" key={item.name + index}>
          <div className="col-md-9">
          <div className="degree-name"><h5> {item.name} </h5>
          <p className="school-name"> {item.school} </p>
        </div>
        </div>
          <div className="col-md-3">
            <div className="dates"><p> {item.date} </p></div>
          </div>
        </div>
      ))
    }
  </div>
)

export default Education;
