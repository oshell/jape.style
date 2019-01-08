import React, { Component } from 'react';
import './Controls.scss';
import { connect } from 'react-redux';
import { addArea } from '../../../../actions/actions';
//import { ELEMENT_TYPES } from '../../../../constants/ElementTypes';

class Controls extends Component {
  render() {
    return(
      <div className="controls">
        <div
          className="controls__action"
          onClick={this.props.addArea}>
          Area
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addArea
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
