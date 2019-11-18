import React from 'react'
import { Link } from 'react-router-dom'

import Project from '../Project/Project'

const Nav = ({ link }) => {
  return (
    <div>
      <Link to={link}>
        <Project />
      </Link>
    </div>
  )
}

export default Nav