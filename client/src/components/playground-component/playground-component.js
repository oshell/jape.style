import React, { Component } from 'react';
import { PlaygroundTypes } from '../../constants/playground-types';

class PlaygroundComponent extends Component {

  render() {
    var element = this.props.element;

    const transform = 'translate(-50%, -50%) translate3d(' + element.positionX + 'px,' + element.positionY + 'px,' + element.positionZ + 'px) rotateZ(' + element.rotationZ + 'deg) rotateX(' + element.rotationX + 'deg) rotateY(' + element.rotationY + 'deg) scale(' + element.scale + ')';

    var divStyle = {
      position: 'absolute',
      transform: transform,
      transformStyle: 'preserve-3d'
    };

    switch (element.type) {
      case PlaygroundTypes.area:
        return <div>Area</div>;
      case PlaygroundTypes.text:
        divStyle.color = element.color;
        divStyle.fontFamily = element.fontFamily;
        divStyle.fontSize = element.fontSize + 'px';
        divStyle.lineHeight = 1.1;
        return <div style={divStyle}>{element.value}</div>;
      case PlaygroundTypes.image:
        return <div>Image</div>;
      case PlaygroundTypes.video:
        return <div>Video</div>;
      default:
        return <div>Unknown</div>;
    }
  }
}

export default PlaygroundComponent;
