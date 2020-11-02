import React from 'react'
import style from './poster.module.css'
import { Row, Container, Col } from 'react-bootstrap'

function Poster() {
    return (
        <Container className={style.poster}>
            <Row>
                <Col col={3}>
                    <img src="https://statics.olx.com.pk/external/base/img/phone-app.webp"></img>
                </Col>
                <Col col={3}>
                    <h1>TRY THE OLX APP</h1>
                    <p className={style.paragraph}>Buy, Sell and find just about anything using the app on your mobile.</p>
                </Col>
                <Col col={3}>
                    <h2>Get your app today</h2>
                    <Row>
                        <Col col={4}><img src="https://statics.olx.com.pk/external/base/img/appstore_2x.webp"></img></Col>
                        <Col col={4}><img src="https://statics.olx.com.pk/external/base/img/playstore_2x.webp"></img></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Poster