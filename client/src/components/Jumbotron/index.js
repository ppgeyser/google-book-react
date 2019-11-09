import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const AppJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1 className="display-3 text-center">(React) Google Books Search</h1>
          <p className="lead text-center">Search for and save books of interest</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default AppJumbotron;