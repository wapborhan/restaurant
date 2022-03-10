import React, { Component } from "react";
// import DISHES from "../../data/dishes";
// import COMMENTS from "../../data/comment";
import MenuItem from "./MenuIteam";
import DishDetail from "./DishDetails";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";
import { addComment, fetchDishes } from "../../redux/actionCreators";
import Loading from "./Loading";

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
    fetchDishes: () => dispatch(fetchDishes()),
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

  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    if (this.props.dishes.isLoading) {
      return (
        <div className="h-100 d-flex justify-content-center">
          <div className=" align-items-center mt-5 ">
            <Loading />
          </div>
        </div>
      );
    } else {
      const menu = this.props.dishes.dishes.map((item) => {
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
