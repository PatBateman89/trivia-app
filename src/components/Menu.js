import React from 'react';

const Menu = (props) => (
  <div
    className='Menu'
    category={props.category}
  >
  {props.category || <p>Category {props.cateogry}</p>}
  </div>
)

export default Menu;
