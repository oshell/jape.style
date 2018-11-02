import React, { Component } from 'react';
import { Form, Button, Sidebar, Header, Segment, Menu } from 'semantic-ui-react';
import Playground from '../playground/playground';
import { PlaygroundTypes } from '../../constants/playground-types';
import ComponentContainer from '../component-container/component-container';
import ActiveElement from '../active-element/active-element';
import './editor.css';
import Position from '../../controller/position';

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elements: [],
      activeElement: null
    };

    this.changeElement = this.changeElement.bind(this);
    this.activateElement = this.activateElement.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  createDefaultElement(type) {
    var element= {
      type: type,
      value: 'Lorem Ipsum',
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      scale: 10,
    }

    switch (type) {
      case 'text':
        element.font = '';
        element.fontSize = 50;
        break;
      default:

    }

    return element;
  }

  addDefaultElement(type) {
    var element = this.createDefaultElement(type);
    var index = this.state.elements.length;
    element.index = index;
    this.setState({elements: [...this.state.elements, element]});
    this.activateElement(element);
  }

  onKeyDown(event) {
   var name="", pos=0, value=0, newPos=0, element={};

    if (!this.state.activeElement) {
      return;
    }

    switch (event.key) {
      case "ArrowLeft":
        name = 'positionX';
        pos = Position.xView(this.state.activeElement.positionX);
        value = --pos;
        newPos = Position.xCalc(value);
        // replace element and set to active
        element = { ...this.state.activeElement };
        element.positionX = newPos;
        this.changeElement(element);
        break;
      case "ArrowRight":
        name = 'positionX';
        pos = Position.xView(this.state.activeElement.positionX);
        value = ++pos;
        newPos = Position.xCalc(value);
        // replace element and set to active
        element = { ...this.state.activeElement };
        element.positionX = newPos;
        this.changeElement(element);
        break;
      case "ArrowUp":
        name = 'positionY';
        pos = Position.yView(this.state.activeElement.positionY);
        value = --pos;
        newPos = Position.yCalc(value);
        // replace element and set to active
        element = { ...this.state.activeElement };
        element.positionY = newPos;
        this.changeElement(element);
        break;
      case "ArrowDown":
        name = 'positionY';
        pos = Position.yView(this.state.activeElement.positionY);
        value = ++pos;
        newPos = Position.yCalc(value);
        // replace element and set to active
        element = { ...this.state.activeElement };
        element.positionY = newPos;
        this.changeElement(element);
      break;
    }
  }

  activateElement(element) {
    this.setState({
      activeElement: element
    });
  }

  changeElement(element) {
    const elements = this.state.elements.slice();
    elements[element.index] = element;
    this.setState({elements: elements, activeElement: element});
  }

  render() {
    const { classes } = this.props;

    return (
      <div id="editor-wrapper" onKeyDown={this.onKeyDown} tabIndex="0">
        <div id="buttonBar">
            <i className="font icon" onClick={(e) => {this.addDefaultElement('text')}}></i>
            <i className="codepen icon"></i>
            <i className="image icon"></i>
            <i className="video icon"></i>
        </div>

        <div id="editor-bg">
          <ComponentContainer
            elements={this.state.elements}
            changeElement={this.changeElement}
            activateElement={this.activateElement}
            activeElement={this.state.activeElement}
             />
           <ActiveElement
             element={this.state.activeElement}
             changeElement={this.changeElement}
              />
          <Playground elements={this.state.elements} />
        </div>
      </div>
    );
  }
}

export default Editor;
