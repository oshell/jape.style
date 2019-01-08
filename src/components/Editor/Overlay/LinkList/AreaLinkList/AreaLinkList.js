import React, { Component } from 'react';
import AreaLink from './AreaLink/AreaLink';
import { connect } from 'react-redux';

class AreaLinkList extends Component {
  render() {
    let areas = this.props.areas ? this.props.areas: [];
    let jsx = [];

    if (areas.length) {
      jsx = areas.map((element, index) => {
        return(<AreaLink index={index} element={element}/>);
      });
    }

    return (
      <div className="link-list">
        {jsx}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  areas: state.areas
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AreaLinkList);
