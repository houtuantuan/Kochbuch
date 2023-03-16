import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";



export default function navbar() {
    return(
        <Navbar bg="light" variant="light">
            <LinkContainer to="/">
                <Navbar.Brand>Home</Navbar.Brand></LinkContainer>
                <Nav className="me-auto">
                    <LinkContainer to="/0"><Nav.Link>Waffelrezept</Nav.Link></LinkContainer>
                    <LinkContainer to="1"><Nav.Link>Dirty Martini</Nav.Link></LinkContainer>
                    <LinkContainer to="4"><Nav.Link>Espresso Martini</Nav.Link></LinkContainer>
                    <LinkContainer to="3"><Nav.Link>Hugo-Cocktail</Nav.Link></LinkContainer>
                    <LinkContainer to="2"><Nav.Link>Negroni</Nav.Link></LinkContainer>
                    <LinkContainer to="5"><Nav.Link>Limoncello Spritz</Nav.Link></LinkContainer>
                </Nav>
        </Navbar>
    )
}
