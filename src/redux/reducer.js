import DISHES from "../data/dishes";
import COMMENTS from "../data/comment";

const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
};

export const Reducer = (state = initialState, action) => {
  if (action.type === "ADD_COMMENT") {
    let comment = action.payload;
    comment.id = state.comments.length;
    comment.date = new Date().toDateString();
    console.log(action);

    return {
      ...state,
      comments: state.comments.concat(comment),
    };
  }

  return state;
};
