import React, { Component } from 'react';
import './Overlay.scss';
import Controls from './Controls/Controls';
import Logo from './Logo/Logo';
import LinkList from './LinkList/LinkList';
import Detail from './Detail/Detail';
import Navigator from './Navigator/Navigator';

class Overlay extends Component {
  render() {
    return(
      <div className="overlay">
        <Logo />
        <Controls />
        <LinkList />
        <Detail />
        <Navigator />
      </div>
    );
  }
}



export default Overlay;
