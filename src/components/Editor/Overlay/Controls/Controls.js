import React, { Component } from 'react';
import './Controls.scss';
import { connect } from 'react-redux';
import { addElement } from '../../../../actions/actions';
import { ELEMENT_TYPES } from '../../../../constants/ElementTypes';

class Controls extends Component {
  render() {
    return(
      <div className="controls">
        <div
          className="controls__action"
          onClick={() => {this.props.addElement(ELEMENT_TYPES.text)}}>
          Text
        </div>
        <div
          className="controls__action"
          onClick={() => {this.props.addElement(ELEMENT_TYPES.area)}}>
          Area
        </div>
        <div
          className="controls__action"
          onClick={() => {this.props.addElement(ELEMENT_TYPES.image)}}>
          Image
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addElement
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
