import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';


export default function Main({ recipes }) {
    return (
        <div className="mainContainer">

            <Row xs={1} sm={2} md={3} className="g-4">
                {recipes && recipes.map((recipe, index) =>
                    <Col key={index}>
                        <Card bg='light' border="success" className='picContainer'>
                            <Card.Img
                                className="recipePic" variant="top" src={recipe && recipe.fields.rezeptBilder.fields.file.url} />
                            <Card.Body>
                                <Card.Title>{recipe && recipe.fields.rezeptName}</Card.Title>
                                <Card.Text>
                                    {recipe && recipe.fields.beschreibung}
                                </Card.Text>
                                <Link to={`/${index}`}>
                                    <Button variant="primary">check it</Button>
                                </Link>
                            </Card.Body>
                        </Card>

                    </Col>
                )
                }
            </Row>
        </div>



    )
}
