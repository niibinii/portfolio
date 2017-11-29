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
        <p> Marcus Olan is a humble, hardworking guy from Ghana. My passions are innumerable but
          to mention a few: coding, working math, teaching, sports and more... I love helping the poor and needy. Want to find out more interesting things about me? Contact me.
        </p>
        <div className="my-btn-group">
          {
            props.navLinks.map((item, index) => {
                if(item.url.indexOf("http") === -1) {
                  return (<Link className="btn btn-info" key={item.name + index} to={item.url}>{item.name}</Link>)
                } else {
                  return (<a className="btn btn-info" key={item.name + index} href={item.url}>{item.name}</a>)
                }
              }
            )
        }
        </div>

      </div>
      <NavbarToggler onClick={props.toggle}/>
      <Collapse navbar isOpen={props.isOpen}>
        <Nav className="ml-auto" navbar>
          {
            props.navLinks.map((item, index) => {
                if(item.url.indexOf("http") === -1) {
                  return (
                    <NavItem key={item.name + index}>
                      <Link to={item.url}>{item.name}</Link>
                    </NavItem>
                  )
                } else {
                  return (
                    <NavItem key={item.name + index}>
                      <a href={item.url}>{item.name}</a>
                    </NavItem>
                  )
                }
              }
            )
        }
        </Nav>
      </Collapse>

    </Navbar>
  </div>
)

export default NavbarN;
