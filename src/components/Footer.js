import React from 'react'
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"


export default function Footer() {
  return (
    
      <footer id='background'style={{marginTop:"3%"}}>
        <Container>
          <Row>
            <Col>
              <p className='text-center'>
                <a onClick={(e)=>e.preventDefault()} href='' className='btn btn-outline-success m-4'>Impressum</a>
                <a onClick={(e)=>e.preventDefault()} href='' className='btn btn-outline-success m-4'>Datenschutz</a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Textarea</Form.Label>
                  <Form.Control as="textarea" placeholder='Write Message...' rows={3} />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </footer>
    
  )
}
