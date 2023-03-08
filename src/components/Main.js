import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Main({ recipe }) {
    return (

        <Card bg='light' border="success" className='picContainer'>
            <Card.Img 
            className="recipePic" variant="top" src={recipe.fields.rezeptBilder.fields.file.url} />
            <Card.Body>
                <Card.Title>{recipe.fields.rezeptName}</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                <Button variant="primary">check it</Button>
            </Card.Body>
        </Card>
    )
}
