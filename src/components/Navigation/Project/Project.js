import React, { Component } from "react";
import { Link } from "react-router-dom";

import './Project.css'

const backgroundColor = {
  1: '#edae49',
  2: '#d1495b',
  3: '#00798c',
  4: '#00527a',
  5: '#ccc',
}
class Project extends Component {

  state = {
    slided: false
  }

  onMouseOverHandler = (ev) => {
    ev.preventDefault()
    this.setState({ slided: true })
  }
  onMouseOutHandler = () => {
    this.setState({ slided: false })
  } 

  randomColor = (max, min) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min
    return backgroundColor[randomNumber]
  }

  render() {

    let projectSq
    if (this.state.slided) {
      projectSq = <main>{this.props.main}</main>
    } else {
      projectSq = <h3>{this.props.title}</h3>
    }

    return (
      <div 
        className={`Project project-${this.props.id}`}
        style={{backgroundColor: `${this.randomColor(6, 1)}`}}
        onMouseEnter={this.onMouseOverHandler}
        onPointerLeave={this.onMouseOutHandler}
        >
          <Link to={this.props.link} target='_blank'>
            <div>
              {projectSq}
            </div>
          </Link>
      </div>
    );
  }
}

export default Project;
