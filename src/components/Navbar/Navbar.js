import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

let NavbarN = (props) => (

  <div>
    <Navbar color="faded" light expand="md" className="mainNav">
      <div className="brand"></div>
      <div className="about-me">
        <h6>About</h6>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
        </p>
        {props.navLinks.map((item, index) => (
          <Link className="btn btn-info" key={item.name + index} to={item.url}>{item.name}</Link>
        ))}
      </div>
      <NavbarToggler onClick={props.toggle}/>
      <Collapse navbar isOpen={props.isOpen}>
        <Nav className="ml-auto" navbar>
          {props.navLinks.map((item, index) => (
            <NavItem key={item.name + index}>
              <Link to={item.url}>{item.name}</Link>
            </NavItem>
          ))}
        </Nav>
      </Collapse>

    </Navbar>
  </div>
)

export default NavbarN;
