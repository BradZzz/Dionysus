import React, { Component, PropTypes } from "react";
import anime from 'animejs';
import $ from 'jquery';
import styles from './styles.scss';

export default class SubmitButton extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const basicTimeline = anime.timeline({
      autoplay: false,
    });

    let pathEl = null
    let offset = null
    let pathEls = $('.check');
    for (let i = 0; i < pathEls.length; i++) {
      pathEl = pathEls[i];
      offset = anime.setDashoffset(pathEl);
      pathEl.setAttribute('stroke-dashoffset', offset);
    }

    basicTimeline.add({
      targets: '.text',
      duration: 1,
      opacity: '0',
    }).add({
      targets: '.button',
      duration: 1300,
      height: 20,
      width: 300,
      backgroundColor: '#2B2D2F',
      border: '0',
      borderRadius: 100,
    }).add({
      targets: '.progress-bar',
      duration: 2000,
      width: 300,
      easing: 'linear',
    }).add({
      targets: '.button',
      width: 0,
      duration: 1,
    }).add({
      targets: '.progress-bar',
      width: 80,
      height: 80,
      delay: 500,
      duration: 750,
      borderRadius: 80,
      backgroundColor: '#71DFBE',
    }).add({
      targets: pathEl,
      strokeDashoffset: [offset, 0],
      duration: 200,
      easing: 'easeInOutSine',
    });

    $('.button').click(function() {
      basicTimeline.play();
    });

    $('.text').click(function() {
      basicTimeline.play();
    });
  }

  render() {
    return (
      <div className="root">
        <div className='button'>
          <div className='text'>Submit</div>
        </div>
        <div className='progress-bar'></div>
        <svg className='chkAccept' x='0px' y='0px' viewBox='0 0 25 30' style={{'enableBackground': 'new 0 0 25 30'}}>
          <path className='check st0' d='M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2'/>
        </svg>
      </div>
    )
  }
}
