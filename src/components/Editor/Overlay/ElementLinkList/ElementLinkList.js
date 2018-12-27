import React, { Component } from 'react';
import './ElementLinkList.scss';
import ElementLink from './ElementLink/ElementLink';
import { connect } from 'react-redux';

class ElementLinkList extends Component {
  render() {
    let elements = this.props.elements ? this.props.elements: [];

    if (elements.length) {
      elements = elements.map((element, index) => {
        return(<ElementLink index={index} element={element}/>);
      });
    }

    return (
      <div className="element-link-list">
        {elements}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  elements: state.elements
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ElementLinkList);
