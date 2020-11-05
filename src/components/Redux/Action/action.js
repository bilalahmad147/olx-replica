export const ADD_DETAIL = "ADD_DETAIL";

export const addDetail = (name, price, imgUrl) => ({
    type: ADD_DETAIL,
    payload: {
        name: name,
        price: price,
        imgUrl: imgUrl
    }
})