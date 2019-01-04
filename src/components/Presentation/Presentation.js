import React, {Component} from 'react';
import './Presentation.scss';
import Element from './Element/Element';
import { connect } from 'react-redux';

class Presentation extends Component {
  render() {
    let elements = this.props.elements;
    let translate3d = 'translate3d(' +
     this.props.presentation.position.x + 'px,' +
     this.props.presentation.position.y + 'px,' +
     this.props.presentation.position.z + 'px)';
    let scale = ' scale(' + this.props.presentation.scale + ')';
    let transform = `${translate3d}   ${scale}`;
    let style = {
      transform: transform
    }

    if (elements.length) {
      elements = elements.map((element, index) => <Element key={index} element={element}/>);
    } else {
      elements = [];
    }

    return (<div className="presentation" style={style}>
      {elements}
    </div>);
  }
}


const mapStateToProps = state => ({
  elements: state.elements,
  presentation: state.presentation
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
