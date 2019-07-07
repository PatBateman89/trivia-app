import React from 'react';

const Footer = (props) => (
  <div
    className="Footer"
    score={props.score}
  >
    Score: {props.score}
  </div>
)

export default Footer;
