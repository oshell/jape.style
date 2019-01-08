// @flow
import React, { Component } from 'react';
import Presentation from '../Presentation/Presentation';
import './Editor.scss';
import EditorController from '../../controller/EditorController';
import PositionController from '../../controller/PositionController';
import { connect } from 'react-redux';
import { edit } from '../../actions/actions';
import Overlay from './Overlay/Overlay';

type Props = {
  edit: Function,
  elements: Array<Object>
};

class Editor extends Component<Props> {
  constructor(props: Props) {
      super(props);
      (this:any).handleOnKeyDown = this.handleOnKeyDown.bind(this);
  }

  handleOnKeyDown(event: Object) {
    let generic = this.props.presentation.zoomed
      ? EditorController.getActiveElement(this.props.areas)
      : EditorController.getActiveArea(this.props.areas);
    let moved = PositionController.handleOnKeyDown(generic, event);
    let changed = PositionController.positionChanged(generic, moved);
    if (changed) {
      this.props.edit(moved);
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

const mapStateToProps = (state) => ({
  areas: state.areas,
  presentation: state.presentation
});

const mapDispatchToProps = {edit};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
