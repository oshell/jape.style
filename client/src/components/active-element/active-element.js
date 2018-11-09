import React, { Component } from 'react';
import './active-element.css';
import Position from '../../controller/position';
import { PlaygroundTypes } from '../../constants/playground-types';
import { Slider } from 'react-semantic-ui-range';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';

class ActiveElement extends Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '0',
      g: '0',
      b: '0',
      a: '1',
    },
  };

  fonts = [
    'Roboto',
    'Open Sans',
    'Poor Story',
    'Merriweather',
    'Playfair Display'
  ]

  onChange(event) {
    console.log(event);
    let element = this.props.element;
    let calcValue = 0;

    switch (event.target.name) {
      case 'positionX':
        calcValue = Position.xCalc(event.target.value);
        element[event.target.name] = calcValue;
        break;
      case 'positionY':
        calcValue = Position.yCalc(event.target.value);
        element[event.target.name] = calcValue;
        break;
      default:
        element[event.target.name] = event.target.value;
        break;
      }

    this.props.changeElement(element);
  }

  addSlider(fields, start, min, max, name, step=1) {
    var settings = {
      start:start,
      min:min,
      max:max,
      step:step,
      onChange: (value) => {
        var event = {
          target: {
            name: name,
            value: value
          }
        }
        this.onChange(event)
      }
    }
    var field= <Slider
      name={name}
      value={start}
      discrete
      color="blue"
      inverted={false}
      settings={settings}
      />;

    fields.push(field);
    return fields;
  }

  addDropdown(fields, name, options) {
    var field = <div className='field'>
      <label>{name}</label>
      <select onChange={(e) => {this.onChange(e)}} name={name}>
        {options.map((option, index) => {
          return <option key={index} value={option}>{option}</option>
        })}
      </select>
    </div>

    fields.push(field)
    return fields
  }

  addColorPicker(fields) {
    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    let field =
      <div>
        <div style={ styles.swatch } onClick={ this.handleColorPickerClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleColorPickerClose }/>
          <SketchPicker color={ this.state.color } onChange={ this.handleColorPickerChange } />
        </div> : null }

      </div>;

    fields.push(field)
    return fields
  }

  handleColorPickerClick = () => {
     this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleColorPickerClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleColorPickerChange = (color) => {
    this.setState({ color: color.rgb });
    let event = {
      target: {name: 'color', value: color.hex}
    }
    this.onChange(event)
  };

  render() {
    var element = this.props.element;
    var specificFields = [];

    if (!element) {
      return <div className="active-element">No Element Selected</div>
    }

    switch (element.type) {
      case PlaygroundTypes.area:
        break
      case PlaygroundTypes.text:
        specificFields = this.addSlider(specificFields, element.fontSize, 10, 60, 'fontSize');
        specificFields = this.addSlider(specificFields, element.rotationX, 0, 360, 'rotationX', 15);
        specificFields = this.addSlider(specificFields, element.rotationY, 0, 360, 'rotationY', 15);
        specificFields = this.addSlider(specificFields, element.rotationZ, 0, 360, 'rotationZ', 15);
        specificFields = this.addDropdown(specificFields, 'fontFamily', this.fonts);
        specificFields = this.addColorPicker(specificFields);
        break;
      case PlaygroundTypes.image:
        break;
      case PlaygroundTypes.video:
        break;
      default:
        break;
    }

    return(
      <div className="active-element">
        <div className="header">{element.type}</div>

        <input
          name="value"
          placeholder='value'
          onChange={(e) => {this.onChange(e)}}
          value={element.value} />

        {specificFields}
      </div>
    );
  }
}

export default ActiveElement;
