import * as actionType from "./actionType";
import axios from "axios";
import { baseUrl } from "./baseUrl";

export const addComment = (dishId, rating, author, comment) => (dispatch) => {
  const newComment = {
    dishId: dishId,
    author: author,
    rating: rating,
    comment: comment,
  };
  newComment.date = new Date().toISOString();

  axios
    .post(baseUrl + "/comments.json", newComment)
    .then((res) => res.data)
    .then((comment) => dispatch(commentConcat(comment)));
};

export const commentConcat = (comment) => ({
  type: actionType.ADD_COMMENT,
  patload: comment,
});

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
      .get(baseUrl + "/dishes.json")
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
      .get(baseUrl + "/comments.json")
      .then((res) => res.data)
      .then((comments) => dispatch(loadComments(comments)));
  };
};
