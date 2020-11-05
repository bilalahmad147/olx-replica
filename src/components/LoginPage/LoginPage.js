import React from 'react'
import { Form, Button } from 'react-bootstrap'
import style from './login.module.css'

function LoginPage() {
    return (
        <div>
            <h1 className={style.heading1}>Login Page</h1>
            <div className={style.loginPage}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Password" />
                    </Form.Group>
                </Form>
                <div className={style.loginDiv}>
                    <Button className={style.loginBtn} variant="primary" type="submit">
                        LOGIN
                    </Button> <br />
                    <Button className={style.loginBtn} variant="primary" type="submit">
                        LOGIN using FB
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
