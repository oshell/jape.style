import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editElement } from '../../../../../../actions/actions';

class Input extends Component {
  render() {
    return(
      <input className="element-detail__field" />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {editElement};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
