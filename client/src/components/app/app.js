import React, { Component } from 'react';
import Editor from '../editor/editor';
import Api from '../../controller/api';

export default class App extends Component {
  componentDidMount() {
    //Api.test();
  }

  render() {
    return (
      <div>
        <Editor />
      </div>
    );
  }
}
