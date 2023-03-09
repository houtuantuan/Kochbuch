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
                    {recipe.fields.beschreibung}
                </Card.Text>
                <Button variant="primary">check it</Button>
            </Card.Body>
        </Card>
    )
}
