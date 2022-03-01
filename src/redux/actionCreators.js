import * as actionType from "./actionType";

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
