import React, { Component } from 'react';
import { connect } from 'react-redux';
import { edit } from '../../../../../../actions/actions';
import EditorController from '../../../../../../controller/EditorController';
import ReactSlider from 'react-slider';
import './Slider.scss';

class Slider extends Component {
  handleChange(sliderValue) {
    let generic = this.props.presentation.zoomed
      ? EditorController.getActiveElement(this.props.areas)
      : EditorController.getActiveArea(this.props.areas);

    if (this.props.propertyName.includes(".")) {
      let props = this.props.propertyName.split(".");
      let prop = props[0];
      let subProp = props[1];
      generic[prop][subProp] = sliderValue;
    } else {
      generic[this.props.propertyName] = sliderValue;
    }

    this.props.edit(generic);
  }

  render() {
    let generic = this.props.presentation.zoomed
      ? EditorController.getActiveElement(this.props.areas)
      : EditorController.getActiveArea(this.props.areas);

    return(
      <ReactSlider
        className="element-detail__field slider"
        min={this.props.min ? this.props.min : 0}
        max={this.props.max ? this.props.max : 100}
        step={this.props.step ? this.props.step : 1}
        defaultValue={generic[this.props.propertyName] ? generic[this.props.propertyName] : 50}
        disabled={this.props.disabled ? this.props.disabled : false}
        onChange={this.handleChange.bind(this)}
        withBars
        />
    );
  }
}

const mapStateToProps = state => ({
  areas: state.areas,
  presentation: state.presentation
});

const mapDispatchToProps = {edit};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
