import React, { Component } from 'react';
import { connect } from 'react-redux';
import ElementLinkList from './ElementLinkList/ElementLinkList';
import AreaLinkList from './AreaLinkList/AreaLinkList';
import './LinkList.scss';

class LinkList extends Component {
  render() {
    let jsx = this.props.presentation.zoomed
      ? <ElementLinkList />
      : <AreaLinkList />;

    return jsx;
  }
}

const mapStateToProps = state => ({
  presentation: state.presentation
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LinkList);
