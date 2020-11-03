import { ADD_DETAIL } from '../Action/action'

const initialState = {
    thingsForSale: [
        { id: 1, name: "car", disc: "new car" },
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