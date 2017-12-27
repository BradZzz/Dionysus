// @flow
import React, { Component } from "react"
import styles from './styles.scss'

export class CoreLayout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props
    return (
      <div className={styles.root}>
        {children}
      </div>
    )
  }
}

export default CoreLayout
