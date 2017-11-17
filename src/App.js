import React from "react";
import {Route, HashRouter, Switch} from "react-router-dom";
import NavbarN from "./components/Navbar";
import Header from "./components/Header";
import SkillsContainer from "./components/Skills";
import EducationContainer from "./components/Education";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";

let navLinks = [
  {
    name: "Home",
    url: ""
  }, {
    name: "Contact",
    url: "/contact"
  }, {
    name: "Portfolio",
    url: "/portfolio"
  }
];

let Portfolio = () => (
  <p>Portfolio</p>
);

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Header />
            <NavbarN className="brand" brand="Marcus Olan" navLinks={navLinks}/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/portfolio" component={Portfolio}/>
            </Switch>
          </div>
        </HashRouter>
        <Footer />
      </div>
    )
  }
}

export default App;
