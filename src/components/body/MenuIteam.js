import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardColumns,
} from "reactstrap";

const MenuItem = (props) => {
  return (
    <div className="mx-2 mt-2">
      <Card
        style={{ cursor: "pointer", width: "350px", height: "250px" }}
        onClick={props.selectDish}
      >
        <CardImg
          alt="Card image cap"
          src={props.dish.image}
          top
          className="img-thumbnail rounded"
          style={{ width: "350px", height: "250px" }}
        />
        <CardImgOverlay>
          <CardTitle
            style={{
              background: "#888888d4",
              borderRadius: "10px",
              padding: "10px",
              width: "40%",
              color: "#fff",
            }}
            tag="h5"
          >
            {props.dish.name}
          </CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default MenuItem;
