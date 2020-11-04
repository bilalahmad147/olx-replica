import React from 'react'
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import style from './product.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function Product() {

    const products = useSelector(state => state.thingsForSale)
    console.log(products)

    return (
        <div className={style.Products}>
            <Container>
                <br />
                <h2>Fresh Recomendations</h2>
                <br />
                <Row>
                    {products.map((obj, ind) => {
                        return (
                            <Col key={ind} className={style.f} sm={6} md={4} lg={3}>
                                <div>
                                    <Card className={style.product} style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={obj.imgUrl} />
                                        <Card.Body>
                                            <Card.Title>{obj.name}</Card.Title>
                                            <Card.Text>
                                                {obj.price}
                                            </Card.Text>
                                            <Link to={`/${obj.name}`}><Button variant="primary">SHOW DETAIL</Button></Link>
                                        </Card.Body>
                                    </Card>
                                </div></Col>
                        )
                    })}
                </Row>
            </Container>
            <div className={style.showMore}>
                <Button variant="primary">SHOW MORE</Button>
            </div>
        </div>
    )
}

export default Product;