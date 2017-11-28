import React from "react";
import "./Education.css";

let Education = (props) => (
  <div className=" educ">
    <h3>Education</h3>
    <div className="row">

    <div className="col-md-12">
      <div className="row">
        <div className="col-md-5">
<h5>Qualification</h5>
        </div>
        <div className="col-md-5">
<h5>School</h5>
        </div>
        <div className="col-md-2">
<h5>Dates</h5>
        </div>
      </div>

    {
      props.qualification.map((item, index)=>(
        <div className="row text-justify">
          <div className="col-md-5" key={item.name + index}>

          <div className="degree-name"><h5> {item.name} </h5>
            <p> {item.qualification} </p>
          </div>
          </div>
          <div className="col-md-5 degree-name">
<p>{item.school}</p>
          </div>
          <div className="col-md-2 degree-name">
<p>{item.date}</p>
          </div>
        </div>


      ))
    }
    </div>
    {/* <div className="col-md-5 institution">
      <h5>School/Institution</h5>
    {
      props.school.map((item, index)=>(

        <div className="col-md-12 degree-name" key={item.name + index}>

      <div className="school-name"><h5> {item.name} </h5>
        <p>{item.school} </p>
      </div>
      </div>

      ))
    }
    </div> */}
    {/* <div className="col-md-2">
      <h5>Dates Attended</h5>
    {
      props.date.map((item, index)=>(

          <div className="col-md-12" key={item.name + index}>
            <div className="date-name"><h5> {item.name} </h5>
            <p> {item.date} </p>
          </div>
          </div>

      ))
    }
    </div> */}
    </div>
  </div>
)

export default Education;
