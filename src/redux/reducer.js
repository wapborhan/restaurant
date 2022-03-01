import DISHES from "../data/dishes";
import COMMENTS from "../data/comment";
import { combineReducers } from "redux";
import * as actionType from "./actionType";

const dishReducer = (dishState = DISHES, action) => {
  switch (action.type) {
    default:
      return dishState;
  }
};

const commentReducer = (commentState = COMMENTS, action) => {
  switch (action.type) {
    case actionType.ADD_COMMENT:
      let comment = action.payload;
      comment.id = commentState.length;
      comment.date = new Date().toDateString();
      console.log(comment);
      return commentState.concat(comment);
    default:
      return commentState;
  }
};

export const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer,
});
