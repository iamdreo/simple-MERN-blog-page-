import React, { Component } from 'react';
import './App.css';
import Blogform from './components/Blogform';
import Posts from './components/Posts';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import PageBar from './components/header'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <PageBar/>
      <Container style={{marginTop: '2%'}}>
      <Row>
     
      <Col xs="6">
      <Posts/>
      </Col>

       <Col xs="6">
     <Blogform/>
      </Col>
      </Row>
      </Container>
      </div>
      </Provider>
    );
  }
}

export default App;
