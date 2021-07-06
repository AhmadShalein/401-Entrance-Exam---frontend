import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import Link from 'react-bootstrap/Link';
import Nav from 'react-bootstrap/Nav'

class Header extends React.Component{
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>Drinks App</Navbar.Brand>
                    <Nav.Link to="/">Home</Nav.Link>
                    <Nav.Link to="/favorite">Favorite</Nav.Link>
                </Navbar>
            </div>
        );
    }
}

export default Header;