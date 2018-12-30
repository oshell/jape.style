import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditorController from '../../../../controller/EditorController';
import { ELEMENT_TYPES } from '../../../../constants/ElementTypes';
import Text from './ElementTypes/Text';
import Area from './ElementTypes/Area';
import './ElementDetail.scss';

class ElementDetail extends Component {
  render() {
    let activeElement = EditorController.getActiveElement(this.props.elements);
    let form;

    if(!activeElement) {
      return <div></div>;
    }

    switch (activeElement.type) {
      case ELEMENT_TYPES.text:
          form = <Text />;
        break;
      case ELEMENT_TYPES.area:
          form = <Area />;
        break;
      default:
        form = <Text />;
    }

    return(
      <div className="element-detail">
        <div className="element-detail--box">{form}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  elements: state.elements
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ElementDetail);
