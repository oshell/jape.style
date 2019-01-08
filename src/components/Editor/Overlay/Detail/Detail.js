import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditorController from '../../../../controller/EditorController';
import { ELEMENT_TYPES } from '../../../../constants/ElementTypes';
import Text from './Form/Text';
import Image from './Form/Image';
import Video from './Form/Video';
import Area from './Form/Area';
import './Detail.scss';

class ElementDetail extends Component {
  handleZoom() {
      let activeElement = EditorController.getActiveElement(this.props.elements);
      this.props.toggleZoom(activeElement);
  }

  // render area details or selected element details based on zoom state
  render() {
    let jsx= <div></div>;
    // this will either be an area or a element (eg. text, image)
    let generic = {};
    // details will display the active area or element, but we need different
    // functions to access them, because elements are nested in areas
    let zoomed = this.props.presentation.zoomed;

    if (zoomed) {
      // if we zoomed an area, we want to edit details of elements
      generic = EditorController.getActiveElement(this.props.areas);
      if (generic === null) {
        return jsx;
      }

      switch (generic.type) {
        case ELEMENT_TYPES.text:
          jsx = <Text />;
          break;
        case ELEMENT_TYPES.image:
          jsx = <Image />;
          break;
        case ELEMENT_TYPES.video:
          jsx = <Video />;
          break;
        default:
          break;
      }
    } else {
      generic = EditorController.getActiveArea(this.props.areas);
      if (generic === null) {
        return jsx;
      }

      jsx = <Area />
    }

    return(
      <div className='detail'><div className='detail--box'>{jsx}</div></div>
    );
  }
}

const mapStateToProps = state => ({
  areas: state.areas,
  presentation: state.presentation
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ElementDetail);
