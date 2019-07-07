import React from 'react';

const Content = (props) => (
  <div
    className="Content"

  >
    {!props.toggle && props.answer && <h2>{props.answer}</h2>}
    {props.toggle && props.question && <h2>{props.question}</h2>}
  </div>
)

export default Content;
