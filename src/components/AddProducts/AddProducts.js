import React from 'react'
import { Form, Button } from 'react-bootstrap'
import style from './addProduct.module.css'

function AddProducts() {
    return (
        <div>
            <Form className={style.formInput}>
                <h2>Add Product Detail</h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter Item Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Item Name..." />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter Item Price:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Item Price..." />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Product
                </Button>
            </Form>
        </div>
    )
}

export default AddProducts
