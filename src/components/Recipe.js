import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



export default function Recipe({ recipes }) {
    const { index } = useParams();
    const recipe = recipes[index];
    console.log(index);
    console.log(recipe);
    let randomIndex = 0;
    do {
        randomIndex = Math.floor(Math.random() * recipes.length)
    } while (randomIndex == index)
    const recommendation = recipes[randomIndex];

    return (
        <>

            <Container>

                <h2 className="text-success" style={{ width: "50%" }}>{recipe && recipe.fields.rezeptName}</h2>


                <Row className="mb-5">

                    <Col xs={12} md={8} style={{ display: "flex" }}>
                        <Image style={{ width: "60%", maxWidth: 400, borderRadius: "1% 0 0 1%" }}
                            src={recipe && recipe.fields.rezeptBilder.fields.file.url} />
                        <ListGroup >
                            <ListGroup.Item key="Zutaten">Zutaten</ListGroup.Item>
                            <ListGroup.Item key="Zubereitungszeit">
                                Zubereitungszeit
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <h4>Empfohlen</h4>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={recommendation && recommendation.fields.rezeptBilder.fields.file.url} />
                            <Card.Body>
                                <Card.Title>{recommendation && recommendation.fields.rezeptName}</Card.Title>
                                <Card.Text>
                                    {recommendation && recommendation.fields.beschreibung}
                                </Card.Text>
                                <Link to={`/${randomIndex}`}>
                                    <Button variant="primary">Go </Button>
                                </Link>

                            </Card.Body>
                        </Card>

                    </Col>
                </Row>

                <Row md={6}>
                    <Col xs={12} md={6}>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" active>Zutaten</ListGroup.Item>


                            {recipe && recipe.fields.ingredients.map((ing, i) =>
                                <>
                                    <ListGroup.Item key={i} as="li">
                                        {ing}
                                    </ListGroup.Item>
                                </>)}
                        </ListGroup>

                    </Col>
                    <Col xs={12} md={6}>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" active>Arbeitsschritte für Limoncello Spritz</ListGroup.Item>


                            {recipe && recipe.fields.anleitung.map((an, i) =>

                                <ListGroup.Item key={i} as="li">
                                    {an}
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
