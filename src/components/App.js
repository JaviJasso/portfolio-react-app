import React, { Component } from 'react';
import '../styles/App.css';
import Main from './Main';
import BaseLayout from './BaseLayout';

class App extends Component {
  render() {
    return (
      <div>
        <BaseLayout>
          <Main/>
        </BaseLayout>
      </div>
    );
  }
}
export default App;
