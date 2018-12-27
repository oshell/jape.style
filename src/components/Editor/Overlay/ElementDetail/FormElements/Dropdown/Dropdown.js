import React from 'react';

const Dropdown = (props) => {
  return(
    <div className='field'>
      <label>{props.name}</label>
      <select onChange={props.onChange}>
        {props.options.map((option, index) => {
          return <option key={index} value={option}>{option}</option>
        })}
      </select>
    </div>
  );
}

export default Dropdown
