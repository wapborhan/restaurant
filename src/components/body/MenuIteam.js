import React from "react";
import {
  Card,
  CardImg,
  cardImgOverlay,
  CardBody,
  CardTitle,
  CardColumns,
  Button,
  CardSubtitle,
  CardText,
} from "reactstrap";

const MenuItem = (props) => {
  return (
    <div className="mx-2 mt-5">
      <CardColumns>
        <Card body color="primary" inverse>
          <CardImg
            alt="Card image cap"
            src={props.dish.image}
            top
            width="250px !important"
            height="250px"
            className="img-thumbnail rounded cdimg"
          />
          <CardBody>
            <CardTitle tag="h5">{props.dish.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Price: {props.dish.price}
            </CardSubtitle>
            <CardText>Description: {props.dish.description}</CardText>
            <Button onClick={props.selectDish}>Details</Button>
          </CardBody>
        </Card>
      </CardColumns>
    </div>
  );
};

export default MenuItem;
