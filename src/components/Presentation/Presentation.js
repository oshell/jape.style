import React, {Component} from 'react';
import './Presentation.scss';
import Element from './Element/Element';
import { connect } from 'react-redux';

class Presentation extends Component {
  render() {
    let areas = this.props.areas;
    let translate3d = 'translate3d(' +
     this.props.presentation.position.x + 'px,' +
     this.props.presentation.position.y + 'px,' +
     this.props.presentation.position.z + 'px)';
    let scale = ' scale(' + this.props.presentation.scale + ')';
    let transform = `${translate3d} ${scale}`;
    let style = {
      transform: transform
    }

    if (areas.length) {
      areas = areas.map((area, index) => <Element key={index} element={area}/>);
    } else {
      areas = [];
    }

    return (<div className="presentation" style={style}>
      {areas}
    </div>);
  }
}


const mapStateToProps = state => ({
  areas: state.areas,
  presentation: state.presentation
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
