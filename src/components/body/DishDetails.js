import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import CardImg from "reactstrap/lib/CardImg";
import LoadComment from "./LoadComment";
import CommentForm from "./CommentForm";
import { baseUrl } from "../../redux/baseUrl";

const DishDetail = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardImg
            src={baseUrl + props.dish.image}
            alt={props.dish.name}
          ></CardImg>
          <CardText className="mt-3">Name: {props.dish.name}</CardText>
          <CardTitle tag="h5">Price: {props.dish.price}</CardTitle>
          <CardSubtitle
            className="mb-2 text-muted d-flex justify-content-start"
            tag="h6"
          >
            <div>Category: {props.dish.category} </div>
            <div> Label: {props.dish.label}</div>
          </CardSubtitle>
          <CardText>Description: {props.dish.description}</CardText>
          <div className="comments text-left mt-5">
            <h2>Comments</h2>
            <hr />
            <LoadComment
              comments={props.comments}
              commntsIsLoading={props.commntsIsLoading}
            />
            <CommentForm dishID={props.dish.id} addComment={props.addComment} />
            <hr />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetail;
