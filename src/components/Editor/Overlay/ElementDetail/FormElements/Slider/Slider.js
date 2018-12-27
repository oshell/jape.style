import React from 'react';
import ReactSlider from 'react-slider';
import './Slider.scss';

const Slider = (props) => {
  return(
    <ReactSlider
      className="element-detail__field slider"
      min={props.min ? props.min : 0}
      max={props.max ? props.max : 100}
      step={props.step ? props.step : 1}
      defaultValue={props.defaultValue ? props.defaultValue : 50}
      disabled={props.disabled ? props.disabled : false}
      onChange={props.onChange ? props.onChange : null}
      />
  );
}

export default Slider
