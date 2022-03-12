import * as actionType from "./actionType";
import axios from "axios";
import { baseUrl } from "./baseUrl";
import { type } from "@testing-library/user-event/dist/type";

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

// Dishes
export const loadDishes = (dishes) => ({
  type: actionType.LOAD_DISHES,
  payload: dishes,
});

export const dishesLoading = () => ({
  type: actionType.DISHES_LOADING,
});

//Fetch Dish
export const fetchDishes = () => {
  return (dispatch) => {
    dispatch(dishesLoading());

    axios
      .get(baseUrl + "dishes")
      .then((res) => res.data)
      .then((dishes) => dispatch(loadDishes(dishes)));
  };
};

// Commnets
export const commentLoading = () => ({
  type: actionType.COMMENT_LOADING,
});

export const loadComments = (comments) => ({
  type: actionType.LOAD_COMMENTS,
  payload: comments,
});

// Fetch Comments
export const fetchCommnets = () => {
  return (dispatch) => {
    dispatch(commentLoading());

    axios
      .get(baseUrl + "comments")
      .then((res) => res.data)
      .then((comments) => dispatch(loadComments(comments)));
  };
};
