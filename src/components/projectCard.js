import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
const ProjectCard = (props) => {
  let [flipped, setFlipped] = useState(false);
  if (flipped === false) {
    return (
      <Card className="m-3 p-1" style={{ width: "20rem" }} id="projectCard">
        <Card.Img src={props.image}></Card.Img>
        <Card.Title>{props.projectName}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button onClick={() => setFlipped((flipped = true))}>See More</Button>
      </Card>
    );
  } else if (flipped === true) {
    return (
      <Card
        className="m-3 p-1 d-flex-column justify-content-around"
        style={{ width: "20rem" }}
      >
        <Button>Live Link</Button>
        <Button>Github</Button>
        <Button onClick={() => setFlipped((flipped = false))}>Back</Button>
      </Card>
    );
  }
};
export { ProjectCard };
