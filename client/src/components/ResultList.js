import React from "react";
import Thumbnail from "./Thumbnail/Thumbnail";
import { Container, Row, Col } from "../components/Grid/index";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
// export function RecipeList({ children }) {
//   return <ul className="list-group">{children}</ul>;
// }

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
function ResultListItem(props) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{props.title}</h3>
            <p>
              Author: {props.author}
              Description: {props.description}
            </p>
            <p>
              Link to View Book: <a href={props.link}></a>
            </p>
            <button className="btn" id="btn" onClick={props.handleSavedBook}>Save Book</button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

export default ResultListItem;
