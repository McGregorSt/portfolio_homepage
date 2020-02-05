import React from "react";

import './ContactMethod.css'

const ContactMethod = ({ icon, scale }) => {
  return (
    <div className='ContactMethod'
        style={{backgroundImage: `url(${icon})`}}>
          
    </div>
  )
};

export default ContactMethod;
