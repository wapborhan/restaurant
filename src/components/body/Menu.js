import React, { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuIteam";
import DishDetail from "./DishDetails";

class Menu extends Component {
  state = {
    dishes: DISHES,
    selectedDish: null,
  };

  onDishSelect = (dish) => {
    this.setState({ selectedDish: dish });
    console.log(dish);
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

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex">{menu}</div>
        </div>
      </div>
    );
  }
}

export default Menu;
