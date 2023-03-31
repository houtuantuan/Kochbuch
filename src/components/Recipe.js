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
    console.log(index);
    console.log(recipe);
    let randomIndex = 0;
    do {
        randomIndex = Math.floor(Math.random() * recipes.length)
    } while (randomIndex === index)
    const recommendation = recipes[randomIndex];

    return (
        <>
            <Container className='mt-5'>
                <h2 className="text-success" style={{ width: "50%" }}>{recipe && recipe.fields.rezeptName}</h2>
                <Row className="mb-3">
                    <Col xs={12} md={8} style={{ display: "flex", border: "none" }}>
                        <Image style={{ height: "100%", width: "60%", maxWidth: 400, borderRadius: "1% 0 0 1%" }}
                            src={recipe && recipe.fields.rezeptBilder.fields.file.url} />
                        <ListGroup style={{ height: "100%" }} className="w-50" >
                            {recipe && recipe.fields.infos.map((info, i) =>
                                <>
                                    <ListGroup.Item className="text-secondary p-3 bg-light border" key={i} as="li">
                                        {info.split(":")[0]}
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        {info.split(":")[1]}
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
                                src={recommendation && recommendation.fields.rezeptBilder.fields.file.url} />
                            <Card.Body className='h-50'>
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
                            <ListGroup.Item as="li" active>Arbeitsschritte</ListGroup.Item>
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
