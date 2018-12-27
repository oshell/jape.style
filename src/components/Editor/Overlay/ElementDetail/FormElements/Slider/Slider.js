import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editElement } from '../../../../../../actions/actions';
import EditorController from '../../../../../../controller/EditorController';
import ReactSlider from 'react-slider';
import './Slider.scss';

class Slider extends Component {
  handleChange(sliderValue) {
    let element = EditorController.getActiveElement(this.props.elements);
    element[this.props.propertyName] = sliderValue;
    this.props.editElement(element);
  }

  render() {
    let element = EditorController.getActiveElement(this.props.elements);

    return(
      <ReactSlider
        className="element-detail__field slider"
        min={this.props.min ? this.props.min : 0}
        max={this.props.max ? this.props.max : 100}
        step={this.props.step ? this.props.step : 1}
        defaultValue={element[this.props.propertyName] ? element[this.props.propertyName] : 50}
        disabled={this.props.disabled ? this.props.disabled : false}
        onChange={this.handleChange.bind(this)}
        withBars
        />
    );
  }
}

const mapStateToProps = state => ({
  elements: state.elements
});

const mapDispatchToProps = {editElement};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
