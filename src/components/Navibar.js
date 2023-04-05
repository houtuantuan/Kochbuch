import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";



export default function navbar() {
    return(
        <Navbar bg="light" variant="light">
            <LinkContainer to="/Kochbuch/">
                <Navbar.Brand>Home</Navbar.Brand></LinkContainer>
                <Nav className="me-auto">
                    <LinkContainer to="/Kochbuch/0"><Nav.Link>Waffelrezept</Nav.Link></LinkContainer>
                    <LinkContainer to="/Kochbuch/1"><Nav.Link>Dirty Martini</Nav.Link></LinkContainer>
                    <LinkContainer to="/Kochbuch/3"><Nav.Link>Espresso Martini</Nav.Link></LinkContainer>
                    <LinkContainer to="/Kochbuch/2"><Nav.Link>Hugo-Cocktail</Nav.Link></LinkContainer>
                    <LinkContainer to="/Kochbuch/7"><Nav.Link>Negroni</Nav.Link></LinkContainer>
                    <LinkContainer to="/Kochbuch/4"><Nav.Link>Limoncello Spritz</Nav.Link></LinkContainer>
                    <LinkContainer to="/Kochbuch/6"><Nav.Link>Manti</Nav.Link></LinkContainer>
                    <LinkContainer to="/Kochbuch/5"><Nav.Link>Chinesisches Rührei mit Tomaten</Nav.Link></LinkContainer>
                </Nav>
        </Navbar>
    )
}
