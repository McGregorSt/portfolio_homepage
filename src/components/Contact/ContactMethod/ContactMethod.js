import React from "react";

// import { NavLink } from 'react-router-dom'
import * as styles from './ContactMethod.css'
import ddd from '../../../assets/icons/logo192.png'

const ContactMethod = ({ icon, scale }) => {
  return (
    <div className='ContactMethod' 
        style={{backgroundImage: `url(${icon})`}}>
          
    </div>
  )
};

export default ContactMethod;
