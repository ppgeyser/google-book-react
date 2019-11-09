import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./styles.css";

const BookCard = (props) => {
  return (
    <div>
      <Card>
            <CardBody>
            <CardTitle><strong>{props.title}</strong></CardTitle>
            <CardSubtitle><em>{props.authors}</em></CardSubtitle>
            <br/>
            <CardText>
                <CardImg src={props.image} className="float-left mr-3 book-img" alt="Book Image" />  
                {props.description}
                </CardText>
            <Button className="float-right" onClick={props.onClick}>{props.label}</Button>
            {/* eslint-disable-next-line */}
            <a href={props.link} target="_blank" className="mr-1 float-right">
                <Button>View</Button> 
            </a>
            </CardBody>
      </Card>
    </div>
  );
};

export default BookCard;