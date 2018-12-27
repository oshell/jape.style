import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editElement } from '../../../../../../actions/actions';
import ReactSlider from 'react-slider';
import './Slider.scss';

class Slider extends Component {
  render() {
    return(
      <ReactSlider
        className="element-detail__field slider"
        min={this.props.min ? this.props.min : 0}
        max={this.props.max ? this.props.max : 100}
        step={this.props.step ? this.props.step : 1}
        defaultValue={this.props.defaultValue ? this.props.defaultValue : 50}
        disabled={this.props.disabled ? this.props.disabled : false}
        onChange={this.props.onChange ? this.props.onChange : null}
        withBars
        />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {editElement};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
