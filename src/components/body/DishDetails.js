import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import LoadComment from "./LoadComment";

const DishDetail = (props) => {
  return (
    <div className="mt-2">
      <div className="row">
        <div className="col-lg-6 dish">
          <img src={props.dish.image} alt={props.dish.name} />
        </div>
        <div className="col-lg-6 text-left">
          <Card>
            <CardBody>
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
                <LoadComment comments={props.dish.comments} />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
