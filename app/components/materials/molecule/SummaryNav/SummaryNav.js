import React, { Component, PropTypes } from "react";
import anime from 'animejs';
import $ from 'jquery';
import styles from './styles.scss';
import Ionicon from 'react-ionicons'

import logo from '../../../../assets/images/purdue_logo.jpg';

import logo2 from '../../../../assets/images/logo_Episource.png';
import logo3 from '../../../../assets/images/logo_GA.png';
import logo4 from '../../../../assets/images/logo_Service.png';

export default class SummaryNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      education: {
        school: "Purdue University",
        major: "Computer Science, BS",
        graduated: 2011,
        image: logo
      },
      jobs: [{
        job: "Episource",
        title: "Senior Fullstack Engineer",
        employed: "June 2017 - Present",
        logo: logo2
      },{
        job: "General Assembly",
        title: "Android / Data Science Immersive Instructor",
        employed: "Jun 2016 - May 2017",
        logo: logo3
      },{
        job: "Service",
        title: "Senior Fullstack Engineer",
        employed: "Oct 2015 - May 2016",
        logo: logo4
      }],
      interests: {
        lived: ["Boston, MA", "New York, NY", "Los Angeles, CA", "Seattle, WA"],
      },
      scorecard: [
        { trait: "C#", score: "B", color: "green", type: "language" },
        { trait: "Java", score: "A", color: "green", type: "language" },
        { trait: "Javascript", score: "A", color: "green", type: "language" },
        { trait: "Python", score: "A-", color: "green", type: "language" },

        { trait: "Android", score: "A-", color: "green", type: "framework" },
        { trait: "Angular", score: "A", color: "green", type: "framework" },
        { trait: "Django", score: "A-", color: "green", type: "framework" },
        { trait: "NodeJS", score: "A", color: "green", type: "framework" },
        { trait: "React", score: "A", color: "green", type: "framework" },

        { trait: "Android Development", score: "A", color: "green", type: "discipline" },
        { trait: "Data Science", score: "A-", color: "green", type: "discipline" },
        { trait: "Game Development", score: "D", color: "green", type: "discipline" },
        { trait: "Web Development", score: "A+", color: "green", type: "discipline" },

        { trait: "Big Data", score: "B-", color: "green", type: "database" },
        { trait: "NoSQL (mongodb, dynamodb)", score: "A-", color: "green", type: "database" },
        { trait: "SQL (postgres, mysql)", score: "A", color: "green", type: "database" },

        { trait: "AWS", score: "A", color: "green", type: "tool" },
        { trait: "Firebase", score: "C+", color: "green", type: "tool" },

        { trait: "Predicting Plots of Movies", score: "A", color: "green", type: "misc" },
        { trait: "Whistling", score: "A+", color: "green", type: "misc" },
      ]
    }
  }

  tblRow = (entry, idx) => {
    return (<tr key={idx} className="snav">
      <td className="snav">{entry.trait}</td>
      <td className="snav">{entry.score}</td>
      <td className="snav">{entry.type}</td>
    </tr>)
  }

  workRow = (entry, idx) => {
    return (<div key={idx} style={{ "display": "flex" }}>
      <img src={ entry.logo } style={{ "width": "100px", "height": "100px", "margin": "1em", "border": "5px solid #ddd", "borderRadius": "2px" }}/>
      <div style={{ "paddingTop": "10px" }}>
        <p><b>{ entry.job }</b></p>
        <p style={{ "paddingLeft": "5px" }}>{ entry.title }</p>
        <p style={{ "paddingLeft": "5px" }}>Employed: { entry.employed }</p>
      </div>
    </div>)
  }

  render() {
    const { education, jobs, scorecard } = this.state
    return (
      <div className="snavRoot">
        <div style={{ "width": "30%", "paddingLeft": "25px" }}>
          <div>
            <h3>Education</h3>
            <div style={{ "display": "flex" }}>
              <img src={ education.image } style={{ "width": "100px", "height": "120px", "margin": "1em", "border": "5px solid #ddd", "borderRadius": "2px" }}/>
              <div style={{ "paddingTop": "10px" }}>
                <p><b>{ education.school }</b></p>
                <p style={{ "paddingLeft": "5px" }}>{ education.major }</p>
                <p style={{ "paddingLeft": "5px" }}>Graduated: { education.graduated }</p>
              </div>
            </div>
          </div>
          <div>
            <h3>Work History</h3>
            { jobs.map(this.workRow) }
          </div>
        </div>
        <div style={{ "display": "flex", "width": "70%", "height": "100%", "margin": "1em" }}>
          <table className="snav">
            <tr>
               <th className="snav">Name</th>
               <th className="snav">Grade</th>
               <th className="snav">Type</th>
             </tr>
            { scorecard.slice(0, scorecard.length / 2).map(this.tblRow) }
          </table>
          <table className="snav">
            <tr>
               <th className="snav">Name</th>
               <th className="snav">Grade</th>
               <th className="snav">Type</th>
             </tr>
            { scorecard.slice(scorecard.length / 2, scorecard.length).map(this.tblRow) }
          </table>
        </div>
      </div>
    )
  }
}
