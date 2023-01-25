import { Component } from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export class Navigationbar extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand>My App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to='/'>
                                    <Nav.Link>Score Board</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/signup'>
                                    <Nav.Link>Sign Up</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='users-data'>
                                    <Nav.Link>Users Data on click</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='users-list'>
                                    <Nav.Link>Users List</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}





// export function Navbar() {
//     return (
//         <>
//             <div>
//                 <ul>
//                     <li><a href="#">Home</a></li>
//                     <li><a href="#">About</a></li>
//                     <li><a href="#">Services</a></li>
//                     <li><a href="#">Contact</a></li>
//                 </ul>
//             </div>
//         </>
//     )
// }