import React, { Component } from 'react';
import {ToggleBox} from '../../ToggleBox';

import { connect } from 'react-redux';
import { activateElement } from '../../../../../../actions/actions.js';

class AreaLink extends Component {
  render() {
    return (
      <ToggleBox
        className="element-link-list__element-link"
        active={this.props.element.active}
        onClick={() => {this.props.activateElement(this.props.index)}}>
        {this.props.element.type}
      </ToggleBox>
    );
  }
}

const mapStateToProps = state => ({
  elements: state.elements
});

const mapDispatchToProps = { activateElement };

export default connect(mapStateToProps, mapDispatchToProps)(AreaLink);
