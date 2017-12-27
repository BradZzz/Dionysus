import React, { Component, PropTypes } from "react";
import anime from 'animejs';
import $ from 'jquery';
import styles from './styles.scss';

import img1 from '../../../assets/images/profile01.jpg'
import img2 from '../../../assets/images/profile02.jpg'
import img3 from '../../../assets/images/profile03.jpg'
import img4 from '../../../assets/images/profile04.jpg'
import img5 from '../../../assets/images/profile05.jpg'

import ProfileNav from '../../materials/molecule/ProfileNav/ProfileNav';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: ['Brad Zimmerman', '"He was born a man and he\'ll die a man"' ],
      slides: [img1, img2, img3, img4, img5],
      idx: 0
    }
    setInterval(this.changeSlide, 8000)
  }

  changeSlide = () => {
    const { slides, idx } = this.state
    this.setState({ idx: (idx > slides.length - 2 ? 0 : idx + 1) })
  }

  title = (words, idx) => {
    return <div key={idx}>{words}</div>
  }

  render() {
    const { tag, slides, idx } = this.state
    console.log("idx", idx)
    const img = slides[idx]
    return (
      <div className="root" style={{ "overflowX": "hidden" }}>
        <div className="backgroundMain" style={{ "background": `url(${img})` }}>
          <div style={{ "width": "100vw", "height": "100vh", "position": "absolute", "background": "rgba(0,0,0,.4)" }}></div>
          <div style={{ "position": "relative", "top": "50%", "transform": "translate(40%)", "fontSize": "1.4em", "color": "#ddd" }}>
            { tag.map(this.title) }
          </div>
        </div>
        <div style={{ "background": "blue", "height": "100vh" }}>
          <div style={{ "position": "relative", "top": "50%", "transform": "translate(40%)", "fontSize": "1.4em", "color": "#ddd" }}>
            Middle Section
          </div>
        </div>
        <ProfileNav/>
      </div>
    )
  }
}
