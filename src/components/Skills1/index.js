import React from "react";
import Skills1 from "./Skills1.js";

let mySkills = [

  {
    name: "react",
    image: "devicon-react-original-wordmark colored"
  },
  {
    name: "oracle db",
    image: "devicon-oracle-original colored"
  },
  {
    name: "bootstrap",
    image: "devicon-bootstrap-plain-wordmark colored"
  },
  {
    name: "vb.net",
    image: "devicon-dot-net-plain-wordmark colored"
  },
  ,
  {
    name: "css",
    image: "devicon-css3-plain-wordmark colored"
  },
  {
    name: "mongo db",
    image: "devicon-mongodb-plain-wordmark colored"
  },
  {
    name: "node js",
    image: "devicon-nodejs-plain-wordmark colored"
  },
  {
    name: "visual studio",
    image: "devicon-visualstudio-plain colored"
  },
  {
    name: "javascript",
    image: "devicon-javascript-plain colored"

  },
  {
    name: "html",
    image: "devicon-html5-plain-wordmark colored"
  },
  {
    name: "mocha",
    image: "devicon-mocha-plain colored"
  },
  {
    name: "express js",
    image: "devicon-express-original-wordmark"
  },
  {
    name: "wordpress",
    image: "devicon-wordpress-plain-wordmark"
  }
];



class Skills1Container extends React.Component {

  render() {
    return (<Skills1 data2={mySkills} />)
  }
}
export default Skills1Container;
