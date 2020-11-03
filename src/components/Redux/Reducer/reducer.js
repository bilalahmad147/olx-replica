import { ADD_DETAIL } from '../Action/action'

const initialState = {
    thingsForSale: [
        { imgUrl:"https://avatarmaker.net/images/8.png" , name: "tehremm", desc: "new car" },
        { imgUrl:"https://avatarmaker.net/images/8.png" , name: "tehremm", desc: "new car" },
        { imgUrl:"https://avatarmaker.net/images/8.png" , name: "tehremm", desc: "new car" },
        { imgUrl:"https://avatarmaker.net/images/8.png" , name: "tehremm", desc: "new car" },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DETAIL: return {
            ...state,
            thingsForSale: state.thingsForSale + action.payload
        }
        default: return state
    }
}

export default reducer;