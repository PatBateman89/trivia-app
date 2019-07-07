import React from 'react';

const Content = (props) => {
  return (
  <div
    className="Content"

  >
    {!props.toggle && props.correct_answer && <div><h2>{props.correct_answer}</h2></div>}
    {props.toggle && props.question && <div><h2>{props.question}</h2></div>}
  </div>
  )
}


export default Content;
