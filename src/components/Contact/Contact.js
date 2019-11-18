import React from "react";

import ContactMethod from "./ContactMethod/ContactMethod";
import * as classes from "./Contact.css";

const Contact = () => {
  const contactData = [
    {
      link: "mailto: stasiak.gregor@gmail.com",
      icon: './gmail.png',
      text: 'EmailMe'
    },
    {
      link: "https://www.linkedin.com/in/grzegorz-stasiak",
      icon: "./linked.png",
      text: 'LinkedIn'
    }
  ];

  return (
    <div className="Contact">
      <h1>Contact me:</h1>
      {console.log(contactData)}
      {contactData.map((elm, index) => {
        return (
          <a href={elm.link} key={index}>
            <ContactMethod icon={elm.icon} />
          </a>
        );
      })}
    </div>
  );
};

export default Contact;
