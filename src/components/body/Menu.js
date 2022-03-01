import React, { Component } from "react";
// import DISHES from "../../data/dishes";
// import COMMENTS from "../../data/comment";
import MenuItem from "./MenuIteam";
import DishDetail from "./DishDetails";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";
import { addComment } from "../../redux/actionCreators";

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, rating, author, comment) =>
      dispatch(addComment(dishId, rating, author, comment)),
  };
};

class Menu extends Component {
  state = {
    // dishes: DISHES,
    // comments: COMMENTS,
    selectedDish: null,
    modalOpen: false,
  };

  onDishSelect = (dish) => {
    this.setState({ selectedDish: dish, modalOpen: !this.state.modalOpen });
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  render() {
    const menu = this.props.dishes.map((item) => {
      return (
        <MenuItem
          dish={item}
          key={item.id}
          selectDish={() => {
            this.onDishSelect(item);
          }}
        />
      );
    });

    let dishDetail = null;
    if (this.state.selectedDish != null) {
      const comments = this.props.comments.filter((comment) => {
        return comment.dishID === this.state.selectedDish.id;
      });
      dishDetail = (
        <DishDetail
          dish={this.state.selectedDish}
          comments={comments}
          addComment={this.props.addComment}
        />
      );
    }
    document.title = "Menu List";
    return (
      <div className="container">
        <div className="row">
          <CardColumns className="mt-3">{menu}</CardColumns>
          <Modal size="lg" isOpen={this.state.modalOpen}>
            <ModalBody>{dishDetail}</ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggleModal}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
