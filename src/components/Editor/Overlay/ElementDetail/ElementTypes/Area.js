import React from 'react';
import Slider from '../FormElements/Slider/Slider';
import Input from '../FormElements/Input/Input';

const Area = () => {
  return(
    <div>
      <Input />
      <Slider min={10} max={60} defaultValue={20} propertyName="width" />
      <Slider
        min={0}
        max={360}
        defaultValue={0}
        step={15}
        propertyName="rotation.z"
         />
       <Slider min={1} max={10} defaultValue={5} propertyName="scale" />
    </div>
  );
}

export default Area
