import React, { Component } from 'react'

import Project from '../Project/Project'
import * as styles from './Portfolio.css'

const projects = [
  {
    title: 'FX holder',
    descreption: `This app is a holder for your FX transactions. You can add
                transactions, delete them and see summary of it all. After you
                put a rate, your transactions will be recalculated into PLN.
                It's SPA built with React and Redux, styled with css modules.`,
    link: '/fx_holder',
    slided: false
  },
  {
    title: 'Management Web Reports',
    descreption: `It's a single-page application for generating reports with
                summary for every day income volumes and others (e.g.
                volume of active clients, volume of assets, volume of
                accounts). App was built with React, styled in CSS and is
                responsive.`,
    link: '/management_web_reports',
    slided: false
  },
  {
    title: 'Burger Builder',
    descreption: `Application for composing your favourite burger. Built with
                React, styled in CSS using media queries. This app is a part of
                tutorial`,
    link: '/burger_builder',
    slided: false
  },
  
  
]



class Portfolio extends Component {





  
  render () {
    const portfolio = projects.map((project, ind, arr) => {
      return <Project 
        title={project.title} 
        main={project.descreption} 
        link={project.link} 
        key={ind}
        onMouseOver={(ev) => this.onMouseOverHandler(ev, ind, arr)}
        onMouseOut={() => this.onMouseOutHandler()}
        slided={project.slided}
        />
    })
    return (
      <div className='Portfolio'>
        <h2>My projects:</h2>
        { portfolio }
      </div>
    )

  }
}

export default Portfolio