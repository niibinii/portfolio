import React from "react";
import Skills from "./Skills.js";

let mySkills = [
  {
    name: "javascript",
    image: "https://www.vectorlogo.zone/logos/javascript/javascript-card.png"

  },
  {
    name: "html",
    image: "https://lh3.googleusercontent.com/zwwddqxgFlP14DlucvBV52RUMA-cV3vRvmjf-iWqxuVhYVmB-l8XN9NDirb0687DSw=w300"
  },
  {
    name: "mocha and chai",
    image: "https://cdn-images-1.medium.com/max/933/1*CrB6isZN6YXeM1rWmnjxHw.png"
  },
  {
    name: "comptia network+",
    image: "http://internetworkpath.com/images/Network.jpg"
  },
  {
    name: "express js",
    image: "http://codecondo.com/wp-content/uploads/2015/07/15-Websites-built-with-Express_785.png"
  },
  {
    name: "wordpress",
    image: "https://cms-assets.tutsplus.com/uploads/users/34/posts/26829/preview_image/wordpress-logo.jpg"
  }
]

class SkillsContainer extends React.Component {

  render() {
    return (<Skills  data={mySkills}/>)
  }
}
export default SkillsContainer;
