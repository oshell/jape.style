import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import './Colorpicker.scss';

class Colorpicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayColorPicker: false,
      color: '#000'
    };
  }

  handleColorPickerClick() {
    this.setState({
      displayColorPicker: !this.state.displayColorPicker
    });
  }

  handleColorPickerClose() {
    this.setState({
      displayColorPicker: false
    });
  }

  handleColorPickerChange(color) {
    this.setState({
      color: color.hex
    });
  }

  render() {
    return(
      <div>
        <div className="colorpicker__swatch" onClick={ this.handleColorPickerClick.bind(this) }>
          <div className="colorpicker__color" style={{background: this.state.color}} />
        </div>
        { this.state.displayColorPicker ? <div className="colorpicker__popover">
          <div className="colorpicker__cover" onClick={ this.handleColorPickerClose.bind(this) }/>
          <SketchPicker color={ this.state.color } onChange={ this.handleColorPickerChange.bind(this) } />
        </div> : null }

      </div>
    );
  }
}

export default Colorpicker;
