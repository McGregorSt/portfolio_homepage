import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import * as styles from './Project.css'

class Project extends Component {

  state = {
    slided: false
  }

  onMouseOverHandler = () => {
    this.setState({ slided: true })
  }
  onMouseOutHandler = () => {
      this.setState({ slided: false })
  } 


  render() {
    return (
      <div
        onPointerEnter={() => this.onMouseOverHandler()}
        onPointerLeave={() => this.onMouseOutHandler()}
      >
        <NavLink to={this.props.link}>
          <div className="Project"
          >
            <header><h4>{this.props.title}</h4></header>
            {this.state.slided ? <main>{this.props.main}</main> : null}
          </div>
        </NavLink>
      </div>
    );
  }
}

export default Project;
