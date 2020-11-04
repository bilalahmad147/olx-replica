import React from 'react';
import { Navbar, Form, Button } from 'react-bootstrap';
import style from './navbar.module.css';
import { Link } from 'react-router-dom'

function Navebar() {
    return (
        <div>
            <Navbar fixed="top" bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img className={style.logo} alt="logoImg" src="https://banner2.cleanpng.com/20180419/lve/kisspng-olx-classified-advertising-company-entrepreneurshi-5ad85872d81723.1584106915241278588851.jpg" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className={style.searchbar}>
                        <Form.Control className={style.searchbar1} size="lg" type="search" placeholder="Pakistan" />
                        <Form.Control className={style.searchbar2} size="lg" type="search" placeholder="Find Cars, Mobile Phones and more.." />
                        <Button variant="primary">&#128269;</Button>
                    </Form>
                    <Button className={style.navbarLogin} variant="link">Login</Button>
                    <Link to='/Sell'><Button className={style.sellBtn} variant="danger">+SELL</Button></Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navebar;