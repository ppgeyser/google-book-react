import React from "react";
import { Jumbotron, Container } from 'reactstrap';

function NoMatch() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
        <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default NoMatch;
