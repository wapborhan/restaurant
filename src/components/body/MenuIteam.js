import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardColumns,
} from "reactstrap";
import { baseUrl } from "../../redux/baseUrl";

const MenuItem = (props) => {
  return (
    <div>
      <Card
        style={{ cursor: "pointer", width: "350px", height: "250px" }}
        onClick={props.selectDish}
      >
        <CardImg
          alt="Card image cap"
          src={baseUrl + props.dish.image}
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
              width: "50%",
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
