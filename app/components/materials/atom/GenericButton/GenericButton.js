import React, { Component, PropTypes } from "react";
import anime from 'animejs';
import $ from 'jquery';
import styles from './styles.scss';
import { Link } from 'react-router-dom';

export default class GenericButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: props.nav
    }
  }

  render() {
    const { nav } = this.state
    return (
      <Link to={{ pathname: nav }}>
        <button className="genbutton noHighlight" type="button">Enter</button>
      </Link>
    )
  }
}
