import * as actionType from "./actionType";
import DISHES from "../data/dishes";

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

    setTimeout(() => {
      dispatch(loadDishes(DISHES));
    }, 2000);
  };
};
