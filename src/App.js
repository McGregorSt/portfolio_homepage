import React from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";

import Portfolio from "./components/Navigation/Portfolio/Portfolio";
import * as styles from './App.css'


function App() {
  

  // const portfolio = projects.map(project => {
  //   return <Portfolio title={project.title} main={project.main} link={project.link} />
  // })

  return (
    <div className='App'> 
        <Portfolio />
    </div>
  ) 
}

export default App;
