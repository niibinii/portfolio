import React from "react";
import NavbarN from "./Navbar.js";

class NavbarContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }


  toggle() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    return (
      <NavbarN {...this.props} toggle={this.toggle} isOpen={this.state.isOpen}/>
    )
  }
}
export default NavbarContainer;
