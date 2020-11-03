import React from 'react'
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import style from './product.module.css';
import { useSelector } from 'react-redux';

function Product() {


    const products = useSelector(state => state)
    console.log(products)

    let objects = [
        { imgUrl: "https://cdn.pixabay.com/photo/2016/08/20/05/36/avatar-1606914_960_720.png", name: "Hira Rehman", desc: "Web Developer" },
        { imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRw94OjqMOjukkF1EOn9cO3VUske1EwoWfkkA&usqp=CAU", name: "Nabiha Potter", desc: "Content Writter" },
        { imgUrl: "https://avatarmaker.net/images/8.png", name: "Tehreem Ijaz", desc: "Full Stack Developer" },
        { imgUrl: "https://thumbs.dreamstime.com/z/girl-lovely-avatar-blonde-hair-cartoon-icon-stock-vector-93364827.jpg", name: "Ayesha Javaid", desc: "Story Writer" },
        { imgUrl: "https://image.freepik.com/free-vector/smiling-girl-avatar_102172-32.jpg", name: "Fizza Liaqat", desc: "Comedian, Actor" },
        { imgUrl: "https://previews.123rf.com/images/nikolaydzhi/nikolaydzhi1609/nikolaydzhi160900323/64778968-muslim-woman-in-hijab-avatar-closed-face-arab-woman-in-a-hijab-isolated-vector-portrait-of-the-saudi.jpg", name: "Sana Ayub", desc: "Event Manager" },
        { imgUrl: "https://thumbs.dreamstime.com/z/muslim-girl-avatar-asian-muslim-traditional-hijab-wearing-62444547.jpg", name: "Falak Munir", desc: "Makeup Artist" },
        { imgUrl: "https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg", name: "Ghulam Mahiyodin", desc: "Makeup Artist" },
    ]

    return (
        <div className={style.Products}>
            <Container>
                <br />
                <h2>Fresh Recomendations</h2>
                <br />
                <Row>
                    {objects.map((obj, ind) => {
                        return (
                            <Col className={style.f} sm={6} md={4} lg={3}>
                                <div>
                                    <Card className={style.product} key={ind} style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={obj.imgUrl} />
                                        <Card.Body>
                                            <Card.Title>{obj.name}</Card.Title>
                                            <Card.Text>
                                                {obj.desc}
                                            </Card.Text>
                                            <Button variant="primary">SHOW DETAIL</Button>
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