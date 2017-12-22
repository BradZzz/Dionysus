import React, { Component, PropTypes } from "react";
import anime from 'animejs';
import $ from 'jquery';
import styles from './styles.scss';

export default class GenericButton extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  click = () => {
    console.log('click')
  }

  render() {
    return (
      <button className="genbutton noHighlight" type="button" onClick={ this.click }>Enter</button>
    )
  }
}
