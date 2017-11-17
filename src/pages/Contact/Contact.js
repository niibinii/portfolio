import React from "react";
import "./Contact.css";

let Contact = (props)=>(
<div className="container-fluid">
  <div className="row">
<div className="col-md-2"></div>
<div className="col-md-8"><h1>Contact Information</h1></div>
<div className="col-md-2"></div>
  </div>
<div className="row">
{
  props.data.map((item, index)=>(
    
  ))
}
</div>
</div>
)
export default Contact;
