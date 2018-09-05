import React, { Component } from 'react';
import './App.css';
import Blogform from './components/Blogform';
import Posts from './components/Posts';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <Container>
      <Blogform/>
      <Posts/>
      </Container>
      </div>
      </Provider>
    );
  }
}

export default App;
