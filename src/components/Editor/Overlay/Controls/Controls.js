import React, { Component } from 'react';
import './Controls.scss';
import { connect } from 'react-redux';
import { addElement } from '../../../../actions/actions';

class Controls extends Component {
  render() {
    return(
      <div className="controls">
        <div className="controls__action" onClick={this.props.addElement}>Text</div>
        <div className="controls__action">Area</div>
        <div className="controls__action">Image</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addElement
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
