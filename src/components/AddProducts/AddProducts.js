import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import style from './addProduct.module.css'
import { useDispatch } from 'react-redux';
import { addDetail } from '../Redux/Action/action'
import { Link } from 'react-router-dom'



function AddProducts() {

    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    return (
        <div>
            <Form className={style.formInput}>
                <h2>Add Product Detail</h2>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter Item Name:</Form.Label>
                    <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter Item Name..." />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter Item Price:</Form.Label>
                    <Form.Control type="text" value={price} onChange={e => setPrice(e.target.value)} placeholder="Enter Item Price..." />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter Image URL:</Form.Label>
                    <Form.Control type="text" value={imgUrl} onChange={e => setImgUrl(e.target.value)} placeholder="Enter Image URL..." />
                </Form.Group>

                <Link to='/'>
                    <Button variant="primary" onClick={() => { dispatch(addDetail(name, price, imgUrl)) }}>
                        Add Product
                    </Button>
                </Link>
            </Form>
        </div>
    )
}

export default AddProducts
