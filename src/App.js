
import { createClient } from "contentful";
import { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Main from "./components/Main";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";

import {Route,Routes} from "react-router-dom";

function App() {
  const [recipes, setRecipes] = useState([]);

  const client = createClient({
    space: "g7wwoqw7k7vb",
    accessToken: "6vacSQq_qoG6HEtSss7ZTCoHm74Sr8yTUUEbOK6PXDY",
  });

  const getData = async () => {
    const entryItems = await client.getEntries();

    console.log("ENTRIES: ", entryItems.items);
    setRecipes(entryItems.items);
  };

  useEffect(() => {
    getData();
  }, []);

  return (


    <div className="mainContainer">
      <Row xs={1} sm={2} md={3} className="g-4">
        {recipes.map((recipe, index) =>
          <Col>
            <Main
              recipe={recipe}
              key={index} />
          </Col>
        )
        }
      </Row>



    </div>

  );
}

export default App;
