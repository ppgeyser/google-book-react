import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const AppJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1 className="display-3 text-center">{props.title}</h1>
          <p className="lead text-center">{props.subtitle}</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default AppJumbotron;