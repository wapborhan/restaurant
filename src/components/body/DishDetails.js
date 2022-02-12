import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import CardImg from "reactstrap/lib/CardImg";
import LoadComment from "./LoadComment";

const DishDetail = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardImg src={props.dish.image} alt={props.dish.name}></CardImg>
          <CardTitle tag="h5">Price: {props.dish.price}</CardTitle>
          <CardText>Name: {props.dish.name}</CardText>
          <CardText>Description: {props.dish.description}</CardText>
          <CardSubtitle
            className="mb-2 text-muted d-flex justify-content-start"
            tag="h6"
          >
            <div>Category: {props.dish.category} </div>
            <div> Label: {props.dish.label}</div>
          </CardSubtitle>
          <div className="comments text-left mt-5">
            <h2>Comments</h2>
            <hr />
            <LoadComment comments={props.comments} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetail;
