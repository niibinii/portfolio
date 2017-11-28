import React from "react";
import Education from "./Education.js";




let myQualification = [
  {
    qualification: "Javascript Fullstack Developer",
    school: "VSchool Ghana, Cape Coast, Ghana",
    date: "Sep-Dec., 2017"
  },
  {
    qualification: "MS. Instructional Tech & Learning Sciences",
    school: "Utah State University, Logan, UT, USA",
      date: "May 2016 -Defered"
  },
  {
    qualification: "MSc. Management Info. Systems",
    school: "Utah State University, Logan, UT, USA",
    date: "Jan. 2010 - Dec. 2011"
  },
  {
    qualification: "BSc. Electrical Engineering",
    school: "Regional Maritime University",
      date: "Aug. 2003 - Jun. 2007"

  },
  {
    qualification: "Senior Sec. Sch. Cert. Exam, SSSCE",
    school: "Pope John Senior High School & Junior Seminary",
      date: "Sep. 1997 - Dec. 2000"
  }
]
// let mySchool = [
//   {
//     school: "VSchool Ghana, Cape Coast, Ghana"
//   },
//   {
//     school: "Utah State University, Logan, UT, USA"
//   },
//   {
//     school: "Utah State University, Logan, UT, USA"
//   },
//   {
//     school: "Regional Maritime University"
//   },
//   {
//     school: "Pope John Senior High School & junior Seminary"
//   }
// ]
// let myDates = [
// {
//   date: "Sep-Dec 2017"
// },
// {
//   date: "2017 - 2018"
// },
// {
//   date: "2017 - 2018"
// },
// {
//   date: "2017 - 2018"
// },
// {
//   date: "2017 - 2018"
// }
// ]
//date={myDates} school={mySchool}
class EducationContainer extends React.Component {

  render() {
    return (<Education   qualification={myQualification}/>)
  }
}
export default EducationContainer;
