import React, { Component } from 'react';
import Presentation from '../Presentation/Presentation';
import './Editor.css';
import EditorController from '../../controller/EditorController';
import PositionController from '../../controller/PositionController';
import { connect } from 'react-redux';
import { addElement, editElement } from '../../actions/actions';
import Overlay from './Overlay/Overlay';

class Editor extends Component {
  constructor(props) {
      super(props);
      this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
  }

  handleOnKeyDown(event) {
    let activeElement = EditorController.getActiveElement(this.props.elements);
    let movedElement = PositionController.handleOnKeyDown(activeElement, event);
    let changed = PositionController.positionChanged(activeElement, movedElement);
    if (changed) {
      this.props.editElement(movedElement);
    } 
  }


  render() {
    return (
      <div id="editor-wrapper" onKeyDown={this.handleOnKeyDown} tabIndex="0">
        <Overlay />
        <div id="editor-bg">
          <Presentation />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  elements: state.elements
});

const mapDispatchToProps = {
  addElement, editElement
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
