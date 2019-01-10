import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleZoom } from '../../../../actions/actions';
import EditorController from '../../../../controller/EditorController';
import './Navigator.scss';

class Navigator extends Component {
  handleZoom() {
      let activeArea = EditorController.getActiveArea(this.props.areas);
      this.props.toggleZoom(activeArea);
  }

  render() {
    return(
      <div className="navigator">
        <div
          className='navigator__button'
          onClick={this.handleZoom.bind(this)}>zoom</div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  areas: state.areas
});


const mapDispatchToProps = {toggleZoom};

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
