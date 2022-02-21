import React from "react";
import dateFormat from "dateformat";

const LoadComment = (props) => {
  return props.comments.map((comment) => {
    return (
      <div key={comment.id}>
        <h5>
          Name: <span style={{ color: "red" }}>{comment.author}</span>
        </h5>
        <p>
          Rating: <span style={{ color: "green" }}>{comment.rating}</span>
        </p>
        <p>
          Comment: <span style={{ color: "#888" }}>{comment.comment}</span>
        </p>
        <p>
          Date:{" "}
          <span style={{ color: "#000" }}>
            {dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}
          </span>
        </p>
        <hr />
      </div>
    );
  });
};

export default LoadComment;
