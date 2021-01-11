import React from 'react';
import Navbar from "react-bootstrap/Navbar";

const Header = (data) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <i className="far fa-futbol"></i>{' '}
                Foot App
            </Navbar.Brand>
        </Navbar>
    );
};

export default Header;