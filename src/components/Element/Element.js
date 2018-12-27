import React, {Component} from 'react';
import { ElementTypes } from '../../constants/ElementTypes';

class Element extends Component {
  render() {
    var element = this.props.element;

    const translate = 'translate(-50%, -50%)';
    const translate3d = 'translate3d(' +
     element.positionX + 'px,' +
     element.positionY + 'px,' +
     element.positionZ + 'px)';
   const rotateZ = 'rotateZ(' + element.rotationZ + 'deg)';
   const rotateY = 'rotateY(' + element.rotationY + 'deg)';
   const rotateX = 'rotateX(' + element.rotationX + 'deg)';
   const rotation = `${rotateZ}  ${rotateY}  ${rotateX}`
   const scale = ' scale(' + element.scale + ')';
   const transform = `${translate} ${translate3d}  ${rotation}  ${scale}`;

    var divStyle = {
      position: 'absolute',
      transform: transform,
      transformStyle: 'preserve-3d'
    };

    switch (element.type) {
      case ElementTypes.area:
        return <div>Area</div>;
      case ElementTypes.text:
        divStyle.color = element.color;
        divStyle.fontFamily = element.fontFamily;
        divStyle.fontSize = element.fontSize + 'px';
        divStyle.lineHeight = 1.1;
        return <div style={divStyle}>{element.value}</div>;
      case ElementTypes.image:
        return <div>Image</div>;
      case ElementTypes.video:
        return <div>Video</div>;
      default:
        return <div>Unknown</div>;
    }
  }
}

export default Element;
