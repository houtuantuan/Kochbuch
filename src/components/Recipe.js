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
import { ListGroupItem } from 'react-bootstrap';




export default function Recipe({ recipes }) {
    const { index } = useParams();
    const recipe = recipes[index];


    const newArray= recipes.map((i) => {
        return(i.infos.split(','))
    });

    const newValue = newArray[index];
    console.log(newArray);

    const zutat= recipes.map((i) => {
        return(i.zutaten.split(','))
    });

    const newZutat = zutat[index];
    const anleitung = recipes.map((i) => {
        return(i.anleitung.split(','))
    });

    const newAnleitung = anleitung[index];

    let randomIndex = 0;
    do {
        randomIndex = Math.floor(Math.random() * recipes.length)
    } while (randomIndex === index)
    const recommendation = recipes[randomIndex];

    return (
        <>
            <Container className='mt-5'>
                <h2 className="text-success" style={{ width: "50%" }}>{recipe && recipe.rezeptname}</h2>
                <Row className="mb-3">
                    <Col xs={12} md={8} style={{ display: "flex", border: "none" }}>
                        <Image style={{ height: "100%", width: "60%", maxWidth: 400, borderRadius: "1% 0 0 1%" }}
                            src={recipe && recipe.rezeptbild} />
                        <ListGroup style={{ height: "100%" }} className="w-50" >
                            {newValue && newValue.map((i) =>
                                <>
                                    <ListGroup.Item className="text-secondary p-3 bg-light border" key={i} as="li">
                                        {i}
                                    </ListGroup.Item>
                                </>)}
                            <ListGroupItem>
                                <Button style={{ width: "70px", marginRight: "10%" }}>share</Button>
                            </ListGroupItem>
                            <ListGroupItem>
                            <Button style={{ width: "70px" }}>save</Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <h4>Empfohlen</h4>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" style={{ height: '70%' }}
                                src={recommendation && recommendation.rezeptbild} />
                            <Card.Body className='h-50'>
                                <Card.Title>{recommendation && recommendation.rezeptname}</Card.Title>
                                <Card.Text>
                                    {recommendation && recommendation.beschreibung}
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
                            {newZutat && newZutat.map((i) =>
                                <>
                                    <ListGroup.Item key={i} as="li">
                                        {i}
                                    </ListGroup.Item>
                                </>)}
                        </ListGroup>
                    </Col>
                    <Col xs={12} md={6}>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" active>Arbeitsschritte</ListGroup.Item>
                            {newAnleitung && newAnleitung.map((i) =>
                                <ListGroup.Item key={i} as="li">
                                    {i}
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
