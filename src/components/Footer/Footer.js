import React from 'react'
import style from './footer.module.css'
import { Row, Container, Col } from 'react-bootstrap'

function Footer() {
    return (
        <div className={style.poster}>
            <Container fluid>
                <Row>
                    <Col col={3}>
                        <img alt='img1' src="https://statics.olx.com.pk/external/base/img/phone-app.webp"></img>
                    </Col>
                    <Col col={3}>
                        <h2 className={style.heading1}>TRY THE OLX APP</h2>
                        <p className={style.paragraph}>Buy, Sell and find just about anything using the app on your mobile.</p>
                    </Col>
                    <Col col={3}>
                        <h6 className={style.heading2}>Get your app today</h6>
                        <Row>
                            <Col className={style.linkImg} col={3}><img alt='img2' src="https://statics.olx.com.pk/external/base/img/appstore_2x.webp"></img></Col>
                            <Col className={style.linkImg} col={3}><img alt='img3' src="https://statics.olx.com.pk/external/base/img/playstore_2x.webp"></img></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer