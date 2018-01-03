import React, { Component, PropTypes } from "react";
import anime from 'animejs';
import $ from 'jquery';
import styles from './styles.scss';
import Ionicon from 'react-ionicons'

import profile3 from '../../../../assets/images/profile_CoverJudge.png';
import profile1 from '../../../../assets/images/profile_Dashdot.png';
import profile4 from '../../../../assets/images/profile_DungeonCountry.png';
import profile2 from '../../../../assets/images/profile_RandomR.png';

export default class ProfileNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: 0,
      profiles: [
        {
          img: profile3,
          name: 'CoverJudge',
          desc: `A quick way to judge a book by it's cover! Select a book you are familiar with, or even one you are not,
            and watch as the website calculates the closest matches within the books that it knows. The website uses a
            TFIDFVectorizer as well as a semantic analysis to try and predict the books closest to the book selected by the user.
          `,
          tech: [
            { name: "NodeJS", type: "framework", color: "blue"},
            { name: "ReactJS", type: "service", color: "blue"},
            { name: "AWS", type: "service", color: "yellow"},
            { name: "Javascript", type: "language", color: "red"},
            { name: "Python", type: "language", color: "red"},
            { name: "NLTK", type: "library", color: "white"}
          ],
          github: "https://github.com/BradZzz/occasio/tree/time_at_last",
          portrait: false
        },
        {
          img: profile1,
          name: 'Dashdot.tv',
          desc: `Dashdot.tv (or arkTV) is the fourth iteration into building a personalized streaming service.
            The website hooks into aws s3, lambda, and incognito to verify each user and build personalized media playlists based on genre.
            Dashdot.tv works as a streaming entity to a Chromecast device as well as a personal media player on the go.
            The media player keeps track of user media choices and uses past browsing preferences to make future additions to the media queue.
          `,
          tech: [
            { name: "AngularJS", type: "framework", color: "blue"},
            { name: "NodeJS", type: "framework", color: "blue"},
            { name: "MongoDB", type: "database", color: "green"},
            { name: "Express", type: "framework", color: "blue"},
            { name: "AWS", type: "service", color: "yellow"},
            { name: "Javascript", type: "language", color: "red"}
          ],
          github: "https://github.com/BradZzz/Ambrosia",
          portrait: false
        },
        {
          img: profile4,
          name: 'DungeonCountry',
          desc: `A game based off the classic Heroes of Might and Magic franchise.
            Worlds are generated dynamically and tiled together like the game Carcassonne.
          `,
          tech: [
            { name: "Unity", type: "framework", color: "blue"},
            { name: "MySQL", type: "database", color: "green"},
            { name: "C#", type: "language", color: "red"}
          ],
          github: "https://github.com/BradZzz/DungeonCountry",
          portrait: false
        },
        {
          img: profile2,
          name: 'RandomR',
          desc: `Enjoy a near infinite source of topics and news at your fingertips!
            Simple and intuitive controls allow you to navigate through Reddit's vast collection of user
            generated content one click at a time. Users have the option to add to their favorite subreddits,
            and can even add those subreddits to their profile's list of subscriptions for later!
          `,
          tech: [
            { name: "Android", type: "framework", color: "blue"},
            { name: "Volley", type: "library", color: "white"},
            { name: "Firebase", type: "service", color: "blue"},
            { name: "MySQL", type: "database", color: "green"},
            { name: "Java", type: "framework", color: "red"}
          ],
          github: "https://github.com/BradZzz/RedShuffle",
          portrait: true
        }
      ]
    }
  }

  sideClick = (idx) => {
    this.setState({ nav: idx })
    console.log("click", idx)
  }

  sideTab = (prof, idx) => {
    return <div key={idx} className="navOption opaque noHighlight" onClick={ () => { this.sideClick(idx) }}>
      {prof.name}
    </div>
  }

  tag = (tech, idx) => {
    return <span key={idx} className="tag opaque noHighlight">
      <svg height="12" width="12" style={{ "marginRight": "5px" }}>
        <circle cx="6" cy="6" r="3" stroke="black" strokeWidth="1" fill={tech.color} />
      </svg>
      {tech.name}
    </span>
  }

  profile = (prof, idx) => {
    return <div key={idx} style={{ "width": "80%" }}>
      <div className="profileTitle" style={{ "height": "20%" }}>
        {prof.name}
      </div>
      <div style={{ "display": "flex", "height": "80%", "background": "#f1f1f1" }}>
        <div className="descWrap">
          <div style={{ "width": "100%", "margin": "1em" }}>
            {prof.desc}
          </div>
          <div style={{ "width": "100%", "display": "flex", "flexWrap": "wrap" }}>
            { prof.tech.map(this.tag) }
          </div>
          <span style={{ "display": "block", "margin": "1em" }}>
            <a href={ prof.github } target="_blank"><Ionicon icon="logo-github" fontSize="35px"/></a>
          </span>
        </div>
        <div className="imgWrap" >
          <img src={prof.img} className={ prof.portrait ? "img alt" : "img" }></img>
        </div>
      </div>
    </div>
  }

  render() {
    const { profiles, nav } = this.state
    return (
      <div style={{ "height": "100vh", "display": "flex" }}>
        <div style={{ "width": "20%", "background": "#ddd", "borderRight": "1px solid" }}>
          <div className="navTitle opaque">Projects</div>
          { profiles.map(this.sideTab) }
        </div>
        { this.profile(profiles[nav]) }
      </div>
    )
  }
}
