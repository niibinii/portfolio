import React from "react";
import "./Contact.css";

let Contact = (props) => (
  <div className="container-fluid contact">
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8 title">
        <h1>Contact Information</h1>
        <hr></hr>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 contact-info">

        <i class="fa fa-address-card-o" aria-hidden="true"></i>
        <p>P.O.Box GP SA 326, Somanya, ER, Ghana</p>

      </div>
      <div className="col-md-3 contact-info">
        <i class="fa fa-mobile" aria-hidden="true"></i>
        <p>+233 243 511 089</p>
      </div>
      <div className="col-md-3 contact-info">

        <i class="fa fa-envelope-o" aria-hidden="true"></i>
        <p>marcus.olan@aggiemail.usu.edu</p>

      </div>
    </div>
  </div>
)
export default Contact;
