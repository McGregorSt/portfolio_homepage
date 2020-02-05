import React, { Component } from 'react'

import Project from '../Project/Project'
import './Portfolio.css'

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
    link: '/management-web-reports',
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
  {
    title: 'Polluted Cities',
    descreption: `Built with ES6, web app for searching top ten most polluted cities in provided country. Data are provided from public API https://docs.openaq.org/ and cities descriptions come from Wikipedia API.`,
    link: '/polluted_cities/',
    slided: false
  },
  {
    title: 'Marilyn',
    descreption: `Web app based on React and Redux. This app gives you 9 most recently uploaded pictures of Marilyn Monroe from Flickr (Flickr API). It was styled with CSS modules and it is responsive`,
    link: '/marilyn',
    slided: false
  },
  {
    title: 'Colour Game',
    descreption: `Game rules: click colour square which at least has one the same colour naighbour (not diagonnaly) and collect as much points as possible. Clicked squares disappear, all above them move down and missing ones are newly generated. App was built with React and Redux`,
    link: '/colour_game',
    slided: false
  },
  {
    title: 'Web design',
    descreption: `Web development based on provided designs. This page is retina ready with its 2x graphics, with some features made alive with jQuery. There is a video modal built on iframe with overlay. Page is RWD.`,
    link: '/newOne',
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
        id={ind + 1}
        style={{'backgroundColor': '#abe'}}
        />
    })
    return (
      <div className="Projects">
        <h2 className='portfolio__header'>My projects:</h2>
        <div className='Portfolio'>
          { portfolio }
        </div>
      </div>
    )
  }
}

export default Portfolio