// import COMMENTS from "../data/comment";
import { combineReducers } from "redux";
import { InitialContactForm } from "./forms";
import { createForms, CreateForms, initialFieldState } from "react-redux-form";
import * as actionType from "./actionType";

const dishReducer = (dishState = { isLoading: false, dishes: [] }, action) => {
  switch (action.type) {
    case actionType.DISHES_LOADING:
      return {
        ...dishState,
        isLoading: true,
        dishes: [],
      };
    case actionType.LOAD_DISHES:
      return {
        ...dishState,
        isLoading: false,
        dishes: action.payload,
      };
    default:
      return dishState;
  }
};

const commentReducer = (
  commentState = { isLoading: true, comments: [] },
  action
) => {
  switch (action.type) {
    case actionType.LOAD_COMMENTS:
      return {
        ...commentState,
        isLoading: false,
        comments: action.payload,
      };
    case actionType.COMMENT_LOADING:
      return {
        ...commentState,
        isLoading: true,
        comments: [],
      };
    case actionType.ADD_COMMENT:
      let comment = action.payload;

      console.log(comment);
      return {
        ...commentState,
        comments: commentState.comments.concat(comment),
      };
    default:
      return commentState;
  }
};

export const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer,
  ...createForms({
    feedback: InitialContactForm,
  }),
});
