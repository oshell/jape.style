import React from 'react';
import Slider from './Slider/Slider';
import Input from './Input/Input';

const Area = () => {
  return(
    <div>
      <div className='detail--box'>
        <div className='detail--title'>Title</div>
        <div className='detail--content'>
          <Input  propertyName="title" />
        </div>
      </div>

      <div className='detail--box'>
        <div className='detail--title'>Width</div>
        <div className='detail--content'>
          <Slider min={10} max={60} defaultValue={20} propertyName="width" />
        </div>
      </div>

      <div className='detail--box'>
        <div className='detail--title'>Rotation</div>
        <div className='detail--content'>
          <Slider
            min={0}
            max={360}
            defaultValue={0}
            step={15}
            propertyName="rotation.z"
             />
        </div>
      </div>

      <div className='detail--box'>
        <div className='detail--title'>Scale</div>
        <div className='detail--content'>
          <Slider min={1} max={10} defaultValue={5} propertyName="scale" />
        </div>
      </div>
    </div>
  );
}

export default Area
