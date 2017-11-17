import React from "react";
import Education from "./Education.js";

let myEducation = [
  {
    name: "MSc. ABC",
    school: "School No. 1",
    date: "2017 - 2018"
  },
  {
    name: "MSc. ABC",
    school: "School No. 1",
    date: "2017 - 2018"
  },
  {
    name: "MSc. ABC",
    school: "School No. 1",
    date: "2017 - 2018"
  }
]

class EducationContainer extends React.Component {

  render() {
    return (<Education  data={myEducation}/>)
  }
}
export default EducationContainer;
