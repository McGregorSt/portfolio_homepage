import React from 'react'
import { NavLink } from 'react-router-dom'

import Project from '../Project/Project'

const Nav = ({ link }) => {
  return (
    <div>
      <NavLink to={link}>
        <Project />
      </NavLink>
    </div>
  )
}

export default Nav