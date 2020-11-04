import { ADD_DETAIL } from '../Action/action'

const initialState = {
    thingsForSale: [
        { imgUrl:"https://avatarmaker.net/images/8.png" , name: "Tehreem", price: "first member" },
        { imgUrl:"https://avatarmaker.net/images/8.png" , name: "Hira", price: "first member" },
        { imgUrl:"https://avatarmaker.net/images/8.png" , name: "Fizza", price: "first member" },
        { imgUrl:"https://avatarmaker.net/images/8.png" , name: "Nabiha", price: "first member" },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DETAIL: return {
            ...state,
            thingsForSale: [...state.thingsForSale,action.payload]
        }
        default: return state
    }
}

export default reducer;