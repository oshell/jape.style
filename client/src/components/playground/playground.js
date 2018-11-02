import React, { Component } from 'react';
import './playground.css';
import PlaygroundComponent from '../playground-component/playground-component';

class Playground extends Component {
    render() {
    const elements = this.props.elements;
    var playgroundComponents = [];

    if (elements.length) {
      playgroundComponents = elements.map((element, index) =>
        <PlaygroundComponent  key={index} element={element} />
      );
    }

    return(
      <div id="playground">
        { playgroundComponents }
      </div>
    );
  }
}

export default Playground;
