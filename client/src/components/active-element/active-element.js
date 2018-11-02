import React, { Component } from 'react';
import './active-element.css';
import Position from '../../controller/position';
import { PlaygroundTypes } from '../../constants/playground-types';
import { Slider } from 'react-semantic-ui-range'

class ActiveElement extends Component {
  fonts = [
    'Roboto',
    'Open Sans',
    'Poor Story',
    'Merriweather',
    'Playfair Display'
  ]

  onChange(event) {
    var element = this.props.element;

    switch (event.target.name) {
      case 'positionX':
        var calcValue = Position.xCalc(event.target.value);
        element[event.target.name] = calcValue;
        break;
      case 'positionY':
        var calcValue = Position.yCalc(event.target.value);
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
