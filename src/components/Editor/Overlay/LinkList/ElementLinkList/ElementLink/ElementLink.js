import React, { Component } from 'react';
import {ToggleBox} from '../../ToggleBox';

import { connect } from 'react-redux';
import { activate } from '../../../../../../actions/actions.js';

class ElementLink extends Component {
  render() {
    return (
      <ToggleBox
        className="element-link-list__element-link"
        active={this.props.element.active}
        onClick={() => {this.props.activate(this.props.index)}}>
        {this.props.element.type}
      </ToggleBox>
    );
  }
}

const mapStateToProps = state => ({
  elements: state.elements
});

const mapDispatchToProps = { activate };

export default connect(mapStateToProps, mapDispatchToProps)(ElementLink);
