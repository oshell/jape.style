import React, { Component } from 'react';
import './Overlay.scss';
import Controls from './Controls/Controls';
import Logo from './Logo/Logo';
import ElementLinkList from './ElementLinkList/ElementLinkList';
import ElementDetail from './ElementDetail/ElementDetail';

class Overlay extends Component {
  render() {
    return(
      <div className="overlay">
        <Logo />
        <Controls />
        <ElementLinkList />
        <ElementDetail />
        <div className="footer"></div>
      </div>
    );
  }
}



export default Overlay;
