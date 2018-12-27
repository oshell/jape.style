import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditorController from '../../../../controller/EditorController';
import Text from './ElementTypes/Text';
import './ElementDetail.scss';

class ElementDetail extends Component {
  render() {
    let activeElement = EditorController.getActiveElement(this.props.elements);
    let form;

    if(!activeElement) {
      return <div></div>;
    }

    switch (activeElement.type) {
      case 'text':
          form = <Text />;
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
