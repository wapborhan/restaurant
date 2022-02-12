import React, { Component } from "react";
import DISHES from "../../data/dishes";
import COMMENTS from "../../data/comment";
import MenuItem from "./MenuIteam";
import DishDetail from "./DishDetails";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";

class Menu extends Component {
  state = {
    dishes: DISHES,
    comments: COMMENTS,
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
    const menu = this.state.dishes.map((item) => {
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
      const comments = this.state.comments.filter((comment) => {
        return comment.dishID === this.state.selectedDish.id;
      });
      dishDetail = (
        <DishDetail dish={this.state.selectedDish} comments={comments} />
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

export default Menu;
