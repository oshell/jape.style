import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleZoom } from '../../../../actions/actions';
import EditorController from '../../../../controller/EditorController';
import { ELEMENT_TYPES } from '../../../../constants/ElementTypes';
import Text from './ElementTypes/Text';
import Area from './ElementTypes/Area';
import './ElementDetail.scss';

class ElementDetail extends Component {
  handleZoom() {
      let activeElement = EditorController.getActiveElement(this.props.elements);
      this.props.toggleZoom(activeElement);
  }

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
        <div className="element-detail--zoom" onClick={this.handleZoom.bind(this)}>zoom</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  elements: state.elements
});

const mapDispatchToProps = {toggleZoom};

export default connect(mapStateToProps, mapDispatchToProps)(ElementDetail);
