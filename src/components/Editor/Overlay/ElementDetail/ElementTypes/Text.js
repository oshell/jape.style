import React from 'react';
import Slider from '../FormElements/Slider/Slider';
import Dropdown from '../FormElements/Dropdown/Dropdown';
import Colorpicker from '../FormElements/Colorpicker/Colorpicker';
import Input from '../FormElements/Input/Input';
import {fonts} from '../../../../../constants/Fonts';

const Text = () => {
  return(
    <div>
      <Input />
      <Slider min={10} max={60} defaultValue={20} />
      <Slider min={0} max={360} defaultValue={0} step={15} />
      <Dropdown options={fonts} onChange={()=>{console.log('foo')}} />
      <Colorpicker />
    </div>
  );
}

export default Text
