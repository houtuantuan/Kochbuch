import React from 'react'
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"


export default function Footer() {
  return (
    <>
    <div>
        <Container>
          <Row>
            <Col>
              <h2 className='text-center fw-bolder text-secondary'>Die Kochbuch Rezeptwelt</h2>
              <hr className='Border border-success border-2 opacity-50'/>
              <p id='firsttitle'>Kochen ist eine Welt voller Abwechslung und Genussmomente - egal ob du Profi oder Anfänger bist. Entdecke die unendlichen Möglichkeiten der Rezeptwelt und lass dich von köstlichen Rezeptideen inspirieren. Erlebe einzigartige Geschmackserlebnisse, die dir den Alltag versüßen und bereite deinen Liebsten ein köstliches Mahl!</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <h2 className='text-center fw-bolder text-secondary'>Tipps die du beim Kochen beachten solltest</h2>
          <hr className='Border border-success border-2 opacity-50'/>
        </Container>
        {/* --------------------------------------------------------------------------------------------------------------- */}
        <Container id='firstrow'>
          <Row>
            <Col sm={12} md={6}>
              <p><span className='badge bg-success'>1</span>Lies das Rezept vollständig durch, bevor du anfängst.</p>
            </Col>
            <Col sm={12} md={6}>
              <p><span className='badge bg-success'>2</span>Bereite alle Zutaten und Geräte vor. Achte auf frische und Qualität der Zutaten. Vor allem Fleisch/Fisch, Obst und Gemüse können für einen guten oder schlechten Geschmack verantwortlich sein.</p>
            </Col>
          </Row>
        </Container>
        {/* -------------------------------------------------------------------------------------------------------------- */}
        <Container id='secondrow'>
          <Row>
            <Col sm={12} md={6}>
              <p><span className='badge bg-success'>3</span>Achte auf richtige Menge und Dosierung der Zutaten.</p>
            </Col>
            
            <Col sm={12} md={6}>
              <p><span className='badge bg-success'>4</span>Lies die Garzeiten genau und überprüfe, ob der gewünschte Garzustand bereits erreicht oder überschritten ist.</p>
            </Col>
          </Row>
        </Container>
        {/* -------------------------------------------------------------------------------------------------------------- */}
        <Container id="thirdrow">
          <Row>
            <Col sm={12} md={6}>
              <p><span className='badge bg-success'>5</span>Verwende geeignete Töpfe und Pfannen. Qualität geht vor Quantität. Ein gutes und scharfes Messer, eine gute Pfanne oder ein guter Topf sind wichtig.</p>
            </Col>
            <Col sm={12} md={6}>
              <p><span className='badge bg-success'>6</span>Vermeide es, das Gericht zu stark zu würzen. Nachwürzen ist in den meisten Fällen immer möglich.</p>
            </Col>
          </Row>
        </Container>
        {/* ------------------------------------------------------------------------------------------------------------- */}
        <Container id='fourthrow'>
          <Row>
            <Col auto>
              <p className='footerMargin'><span className='badge bg-success'>7</span>Iss, lagere oder kühle das Gericht sofort nach dem Kochen. Natürlich gibt es auch hier  Ausnahmen.</p>
            </Col>
          </Row>
        </Container>
      </div>
      {/* -----------------------------------------FOOTER---------------------------------------------------------------- */}
      <footer id='background'>
        <Container>
          <Row>
            <Col>
              <p className='text-center'>
                <a onClick={(e)=>e.preventDefault()} href='' className='btn btn-outline-success'>Impressum</a>
                <a onClick={(e)=>e.preventDefault()} href='' className='btn btn-outline-success'>Datenschutz</a>
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
    </>
  )
}
