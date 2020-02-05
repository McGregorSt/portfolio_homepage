import React from "react";

import ContactMethod from "./ContactMethod/ContactMethod";
import "./Contact.css";

const Contact = () => {
  const contactData = [
    {
      link: "mailto: stasiak.gregor@gmail.com",
      icon: './gm.png',
      text: 'EmailMe'
    },
    {
      link: "https://www.linkedin.com/in/grzegorz-stasiak",
      icon: "./in.png",
      text: 'LinkedIn'
    }
  ];

  return (
    <div className="Contact">
      <h1>Contact me:</h1>
      {contactData.map((elm, index) => {
        return (
          <a href={elm.link} 
             key={index} 
             target='_blank' 
             className='Contact---icon'
             rel="noopener noreferrer"
             >
            <ContactMethod icon={elm.icon} />
          </a>
        );
      })}
    </div>
  );
};

export default Contact;
