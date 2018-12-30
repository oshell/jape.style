import React, {Component} from 'react';
import './Presentation.scss';
import Element from './Element/Element';
import { connect } from 'react-redux';

class Presentation extends Component {
  render() {
    let elements = this.props.elements;

    if (elements.length) {
      elements = elements.map((element, index) => <Element key={index} element={element}/>);
    } else {
      elements = [];
    }

    return (<div className="presentation">
      <div className="presentation__border"></div>
      {elements}
    </div>);
  }
}


const mapStateToProps = state => ({
  elements: state.elements
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
