import React, { Component, useState } from "react";
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

    let dishDetail = null;
    if (this.state.selectedDish != null) {
      dishDetail = <DishDetail dish={this.state.selectedDish} />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">{menu}</div>
          <div className="col-lg-6 d-flex">{dishDetail}</div>
        </div>
      </div>
    );
  }
}

export default Menu;
