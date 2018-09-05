import React, { Component } from 'react';
import { Media, Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class Posts extends Component {
    componentDidMount() {
        this.props.getItems();
      }

      onDeleteClick = id => {
        this.props.deleteItem(id);
      };
      render() {
        const { items } = this.props.item;
        return (
          <Container>
            <ListGroup>
              <TransitionGroup className="Posts">
                {items.map(({ _id, email, name, title, text}) => (
                  <CSSTransition key={_id} timeout={500} classNames="fade">
                 <ListGroupItem>
                  <Media>
          <Media left top href="#">
          <Media object data-src='' />
         </Media>
         <Media body>
          <Media heading>
            {title} by {name}
          </Media>
         {text}
        </Media>
        <Button
                      color="link"
                        onClick={this.onDeleteClick.bind(this, _id)}
                      >Delete
                       
                      </Button>
      </Media>
                  </ListGroupItem> 
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </ListGroup>
          </Container>
        );
      }
    }


        Posts.propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired
      };
      
      const mapStateToProps = state => ({
        item: state.item
      });
      
      export default connect(
        mapStateToProps,
        { getItems, deleteItem }
      )(Posts)