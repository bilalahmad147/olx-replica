import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './login.module.css'
import firebase from '../Config/firebase'
import Navebar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Footer2 from '../Footer2/Footer2'

function LoginPage() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    console.log(name, email)

    const loginWithEmail = () => {

        firebase.auth().createUserWithEmailAndPassword(name, email)

            .then(() => {
                console.log("User Successfully Registred")
            })

        firebase.database().ref('/').child(`users/${name}`).set({ name, email })

            .catch(function (error) {
                var errorMessage = error.message;
                console.log(errorMessage, "User not registered")
            });
    }

    const loginWithFb = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var user = result.user;
                console.log(user)

                let createUser = {
                    name: user.displayName,
                    email: user.email
                }

                firebase.database().ref('/').child(`users/${name}`).set(createUser.email)

            }).catch(function (error) {
                console.log(error.message)
            });
    }

    return (
        <div>
            <Navebar />
            <div>
                <h1 className={style.heading1}>Login Page</h1>
                <div className={style.loginPage}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Enter Name</Form.Label>
                            <Form.Control value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter name" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Email" />
                        </Form.Group>
                        <div className={style.loginDiv}>
                            <Link to='/'>
                                <Button onClick={() => loginWithEmail()} className={style.loginBtn} variant="primary" type="submit">
                                    LOGIN
                            </Button>
                            </Link>
                            <br />
                            <Link to='/'>
                                <Button onClick={() => loginWithFb()} className={style.loginBtn} variant="primary" type="submit">
                                    LOGIN using FB
                            </Button>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
            <Footer />
            <Footer2 />
        </div>
    )
}

export default LoginPage
