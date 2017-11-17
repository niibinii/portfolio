import React from "react";
import Skills from "./Skills.js";

let mySkills = [
  {
    name: "baseball",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Baseball_%28crop%29.jpg/1200px-Baseball_%28crop%29.jpg"

  },
  {
    name: "baseball",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Baseball_%28crop%29.jpg/1200px-Baseball_%28crop%29.jpg"
  },
  {
    name: "baseball",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Baseball_%28crop%29.jpg/1200px-Baseball_%28crop%29.jpg"
  }
]

class SkillsContainer extends React.Component {

  render() {
    return (<Skills  data={mySkills}/>)
  }
}
export default SkillsContainer;
