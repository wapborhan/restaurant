import * as actionType from "./actionType";
import axios from "axios";
import { baseUrl } from "./baseUrl";

export const addComment = (dishId, rating, author, comment) => {
  return {
    type: actionType.ADD_COMMENT,
    payload: {
      dishId: dishId,
      rating: rating,
      author: author,
      comment: comment,
    },
  };
};

export const loadDishes = (dishes) => ({
  type: actionType.LOAD_DISHES,
  payload: dishes,
});

export const dishesLoading = () => ({
  type: actionType.DISHES_LOADING,
});

export const fetchDishes = () => {
  return (dispatch) => {
    dispatch(dishesLoading());

    axios
      .get(baseUrl + "dishes")
      .then((res) => res.data)
      .then((dishes) => dispatch(loadDishes(dishes)));
  };
};
