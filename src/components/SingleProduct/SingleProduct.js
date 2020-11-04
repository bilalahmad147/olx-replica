import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import style from './singleProduct.module.css'


function SingleProduct() {

    var { name } = useParams();
    const productItem = useSelector(state => state.thingsForSale)
    const itemsList = productItem.map(a => a.name)
    const a = itemsList.indexOf(name)
    const itemNum = productItem[a]
    console.log(itemsList)
    console.log(itemNum)
    console.log(name)

    if (!itemNum) {
        return <h1>Not Found at this URL</h1>
    }

    var { price, imgUrl } = itemNum

    return (
        <div className={style.mainDiv}>
            <h1>ITEM DETAIL</h1>
            <h2>Item Name : {name}</h2>
            <h2>Item Price : {price}</h2>
            <img alt={name} src={imgUrl} /> <br /><br />
            <Link to='/'>
                <Button variant="primary">HIDE DETAIL</Button>
            </Link>
            <br />
            <br />
            <br />
        </div>
    )
}

export default SingleProduct
