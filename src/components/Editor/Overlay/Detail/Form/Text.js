import React from 'react';
import Slider from './Slider/Slider';
import Dropdown from './Dropdown/Dropdown';
import Colorpicker from './Colorpicker/Colorpicker';
import Input from './Input/Input';
import {FONTS} from '../../../../../constants/Fonts';

const Text = () => {
  return(
    <div>
      <Input />
      <Slider min={10} max={60} defaultValue={20} propertyName="fontSize" />
      <Slider min={0} max={360} defaultValue={0} step={15} propertyName="rotation.z" />
      <Dropdown options={FONTS} onChange={()=>{console.log('foo')}} />
      <Colorpicker />
    </div>
  );
}

export default Text
