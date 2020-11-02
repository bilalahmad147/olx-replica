import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import style from './navbar2.module.css';
import image from './images/bg_image.jpg'



function Navbar2() {
    return (
        <div>
            <Navbar  className={style.ribbon} bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="All Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"><b>Mobiles</b></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Tablets</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Mobiles Phones</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Mobile Phones</Nav.Link>
                        <Nav.Link href="#link">Cars</Nav.Link>
                        <Nav.Link href="#link">Motorcycles</Nav.Link>
                        <Nav.Link href="#link">Houses</Nav.Link>
                        <Nav.Link href="#link">TV - Video - Audio</Nav.Link>
                        <Nav.Link href="#link">Tables</Nav.Link>
                        <Nav.Link href="#link">Land & Plots</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <img className={style.bannerimg} src={image}></img>
        </div>
    )
}

export default Navbar2;