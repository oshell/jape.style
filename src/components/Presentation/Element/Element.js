import React, {Component} from 'react';
import SizeController from '../../../controller/SizeController';
import { ELEMENT_TYPES } from '../../../constants/ElementTypes';
import { Area } from './Styled/Area';

class Element extends Component {
  render() {
    var element = this.props.element;

    const translate = 'translate(-50%, -50%)';
    const translate3d = 'translate3d(' +
     element.position.x + 'px,' +
     element.position.y + 'px,' +
     element.position.z + 'px)';
   const rotateZ = 'rotateZ(' + element.rotation.z + 'deg)';
   const rotateY = 'rotateY(' + element.rotation.y + 'deg)';
   const rotateX = 'rotateX(' + element.rotation.x + 'deg)';
   const rotation = `${rotateZ}  ${rotateY}  ${rotateX}`
   const scale = ' scale(' + element.scale + ')';
   const transform = `${translate} ${translate3d}  ${rotation}  ${scale}`;

    var divStyle = {
      position: 'absolute',
      transform: transform,
      transformStyle: 'preserve-3d'
    };

    switch (element.type) {
      case ELEMENT_TYPES.area:
        return <Area
          width={SizeController.relativeWidth(element.width)}
          position={element.position}
          rotation={element.rotation}
          scale={element.scale} />;
      case ELEMENT_TYPES.text:
        divStyle.color = element.color;
        divStyle.fontFamily = element.fontFamily;
        divStyle.fontSize = element.fontSize + 'px';
        divStyle.lineHeight = 1.1;
        return <div style={divStyle}>{element.value}</div>;
      case ELEMENT_TYPES.image:
        return <div>Image</div>;
      case ELEMENT_TYPES.video:
        return <div>Video</div>;
      default:
        return <div>Unknown</div>;
    }
  }
}

export default Element;
