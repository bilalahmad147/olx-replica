export const ADD_DETAIL = "ADD_DETAIL";

export const addDetail = () => ({
    type: ADD_DETAIL,
    payload: {
        name: 'bilal',
        desc: 'a new member',
        imgUrl: 'hello world',
    }
})