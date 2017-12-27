import React, { Component, PropTypes } from "react";
import anime from 'animejs';
import $ from 'jquery';
import styles from './styles.scss';

export default class ProfileIcon extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    var svgAttributes = anime({
      targets: '#svgAttributes polygon',
      points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
      easing: 'easeInOutExpo',
      loop: true
    });
  }

  render() {
    return (
      <div id="svgAttributes" style={{ "margin": "0 auto", "position": "relative", "width": "130px", "marginBottom": "200px" }}>
        <svg width="128" height="128" viewBox="0 0 128 128">
          <polygon points="64 68.79172987475006 8.574 99.98977561490902 63.30574188532201 67.58879848498852 64 3.9897756149090253 64.694258114678 67.58879848498852 119.426 99.98977561490902 " fill="currentColor"></polygon>
        </svg>
      </div>
    )
  }
}
