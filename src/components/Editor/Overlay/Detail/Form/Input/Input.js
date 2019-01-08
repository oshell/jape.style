import React, { Component } from 'react';
import { connect } from 'react-redux';
import { edit } from '../../../../../../actions/actions';
import EditorController from '../../../../../../controller/EditorController';

class Input extends Component {
  handleChange(e) {
    let generic = this.props.presentation.zoomed
      ? EditorController.getActiveElement(this.props.areas)
      : EditorController.getActiveArea(this.props.areas);

    generic[this.props.propertyName] = e.target.value;
    this.props.edit(generic, this.props.areas);
  }

  render() {
    let generic = this.props.presentation.zoomed
      ? EditorController.getActiveElement(this.props.areas)
      : EditorController.getActiveArea(this.props.areas);


    return(
      <input
        value={generic[this.props.propertyName]}
        onChange={this.handleChange.bind(this)}
        className="element-detail__field"
         />
    );
  }
}

const mapStateToProps = state => ({
  areas: state.areas,
  presentation: state.presentation
});

const mapDispatchToProps = {edit};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
