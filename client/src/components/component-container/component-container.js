import React, { Component } from 'react';
import './component-container.css';

class ComponentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.changeElement = props.changeElement;
  }

  render() {
    const elements = this.props.elements;
    const activeElement = this.props.activeElement;

    var playgroundComponents = [];

    if (elements.length) {
      playgroundComponents = elements.map((element, index) => {
        element.index = index;

        var isActive = '';
        if (activeElement && activeElement.index === index) {
          isActive= 'active';
        }

        return(
          <div key={index}
            className={"playgroundComponent " + isActive}
            onClick={() => {this.props.activateElement(element)}}>
            {element.type}
          </div>
        );
      });
    }

    return (
      <div id="component-container">
        {playgroundComponents}
      </div>
    );
  }
}

export default ComponentContainer;
