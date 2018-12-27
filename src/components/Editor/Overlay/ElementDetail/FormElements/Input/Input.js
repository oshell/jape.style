import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editElement } from '../../../../../../actions/actions';
import EditorController from '../../../../../../controller/EditorController';

class Input extends Component {
  handleChange(e) {
    let element = EditorController.getActiveElement(this.props.elements);
    element.value = e.target.value;
    this.props.editElement(element);
  }

  render() {
    let element = EditorController.getActiveElement(this.props.elements);

    return(
      <input
        value={element.value}
        onChange={this.handleChange.bind(this)}
        className="element-detail__field"
         />
    );
  }
}

const mapStateToProps = state => ({
  elements: state.elements
});

const mapDispatchToProps = {editElement};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
