import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import style from './addProduct.module.css'
import { useDispatch } from 'react-redux';
import { addDetail } from '../Redux/Action/action'
import { Link } from 'react-router-dom'
import Navebar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Footer2 from '../Footer2/Footer2'
// import { storage } from '../Config/firebase';



function AddProducts() {

    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    // function for uploading image to firebase storage


    // const allInputs = { imgUrl: '' }
    // const [imageAsFile, setImageAsFile] = useState('')
    // const [imageAsUrl, setImageAsUrl] = useState(allInputs)
    // console.log(imageAsUrl)

    // const handleImageAsFile = (e) => {
    //     const image = e.target.files[0]
    //     console.log(image)
    //     setImageAsFile(im => (image))
    // }


    // const handleImageUpload = (e) => {
    //     e.preventDefault()
    //     console.log('start of upload')
    //     const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
    //     uploadTask.on('state_changed',
    //         (snapShot) => {
    //             console.log(snapShot)
    //         },
    //         (err) => {
    //             console.log(err, 'here is error occured')
    //         },
    //         () => {
    //             storage.ref('images').child(imageAsFile.name).getDownloadURL()
    //                 .then(fireBaseUrl => {
    //                     console.log(fireBaseUrl)
    //                     setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }))
    //                 })
    //         })
    // }

    return (
        <div>
            <Navebar />
            <div className={style.mainDiv}>
                <h2 className={style.heading1}>Add Product Detail</h2>
                <div className={style.childDiv}>
                    <Form className={style.formInput}>
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
            </div>
            <Footer />
            <Footer2 />
        </div>
    )
}

export default AddProducts
