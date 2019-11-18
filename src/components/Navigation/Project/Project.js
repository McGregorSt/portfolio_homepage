import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

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
          {/* <a target="_blank" href={this.props.link} > */}
        <Link to={this.props.link} target='_blank'>
            <div className="Project"
            >
              <header><h4>{this.props.title}</h4></header>
              {this.state.slided ? <main>{this.props.main}</main> : null}
            </div>
        </Link>
          {/* </a> */}
      </div>
    );
  }
}

export default Project;
