import DISHES from "../data/dishes";
import COMMENTS from "../data/comment";

const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
