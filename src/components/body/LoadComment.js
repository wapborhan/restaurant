import { render } from "@testing-library/react";
import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  CardSubtitle,
  CardText,
} from "reactstrap";

const DishDetail = (props) => {
  render();
  return (
    <div className="mt-5">
      <Card>
        <CardImg alt="Card image cap" src={props.dish.image} top />
        <CardBody>
          <CardTitle tag="h5">{props.dish.name}</CardTitle>
          <CardSubtitle
            className="mb-2 text-muted d-flex justify-content-around"
            tag="h6"
          >
            <div>Price: {props.dish.price}</div>
            <div>Category: {props.dish.category}</div>
            <div>Label: {props.dish.label}</div>
          </CardSubtitle>
          <CardText>Description: {props.dish.description}</CardText>
          <Button>Add to Cart</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetail;
