import React, { Component } from 'react';
import {ToggleBox} from '../../ToggleBox';

import { connect } from 'react-redux';
import { activate } from '../../../../../../actions/actions.js';

class AreaLink extends Component {
  render() {
    return (
      <ToggleBox
        className="link-list__link"
        active={this.props.area.active}
        onClick={() => {this.props.activate(this.props.index)}}>
        {this.props.area.title}
      </ToggleBox>
    );
  }
}

const mapStateToProps = state => ({
  areas: state.areas
});

const mapDispatchToProps = { activate };

export default connect(mapStateToProps, mapDispatchToProps)(AreaLink);
