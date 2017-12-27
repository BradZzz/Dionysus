import React, { Component, PropTypes } from "react";
import anime from 'animejs';
import $ from 'jquery';
import styles from './styles.scss';

import profile1 from '../../../../assets/images/profile_Dashdot.png';

export default class ProfileNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: [
        { img: profile1, name: 'dashdot.tv', desc: 'this is the description for this project' }
      ]
    }
  }

  sideTab = (prof, idx) => {
    return <div key={idx}>
      {prof.name}
    </div>
  }

  profile = (prof, idx) => {
    return <div key={idx} style={{ "width": "80%" }}>
      <div className="profileTitle" style={{ "height": "20vh" }}>
        {prof.name}
      </div>
      <img src={prof.img} style={{ "width": "100%", "height": "80vh" }}></img>
    </div>
  }

  render() {
    const { profiles } = this.state
    return (
      <div style={{ "height": "100vh", "display": "flex" }}>
        <div style={{ "width": "20%", "background": "#ddd" }}>
          <div>Projects</div>
          { profiles.map(this.sideTab) }
        </div>
        { profiles.map(this.profile) }
      </div>
    )
  }
}
