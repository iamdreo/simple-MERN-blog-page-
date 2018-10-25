import React, {Component} from 'react';
import {Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import './Blogform.css'





 

class Blogform extends Component {

  state = {
    email: '',
    name: '',
    title:'',
    post:'',
    text:'',
   
  };

 

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      email: this.state.email,
      name: this.state.name,
      title: this.state.title,
      text: this.state.text,
      

    };

     // Add item via addItem action
     this.props.addItem(newItem);

     
   };


render() {
    return (

      <div >

      

      <Container className="formStyle">

       
        
        <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input type="email" name="email" id="BloggerEmail" placeholder="Please enter your email" onChange={this.onChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="Name">Name</Label>
          <Input type="text" name="name" id="UserName" placeholder="Please enter your name" onChange={this.onChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="Title">Title</Label>
          <Input type="text" name="title" id="PostTitle" placeholder="Please enter the title of the topic" onChange={this.onChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="BlogPost">Post</Label>
          <Input type="textarea" name="text" id="blogText" onChange={this.onChange}/>
        
        </FormGroup>
        <FormGroup>
         
          <FormText color="muted">
            Click Submit when you are through
          </FormText>
        </FormGroup>
        <Button>Submit
          </Button>
      </Form>

      
      </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  item: state.item
});
export default connect(
  mapStateToProps,
  { addItem }
)(Blogform);