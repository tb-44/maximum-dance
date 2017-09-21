import axios from 'axios';

//SET INITIAL STATE
const initialState = {
    parent: {}

}

//ACTION TYPES
const GET_PARENT_INFO = "GET_PARENT_INFO";
const ADD_PARENT_INFO = "ADD_PARENT_INFO";

//ACTION CREATORS
export function getParentInfo() {
    const parentInfo = axios.get('/auth/me').then( res => {
        return res.data
    })
    return {
        type: GET_PARENT_INFO,
        payload: parentInfo
    }
}

export function addParentInfo(obj){
    const newParentInfo = axios.post('db', obj).then( res => {
        return res.data
    })
    return {
        type: ADD_PARENT_INFO,
        payload: newParentInfo
    }
}

//REDUCER FUNCTION
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_PARENT_INFO + '_FULFILLED':
            return Object.assign({}, state, { parent: action.payload });

        case ADD_PARENT_INFO + '_FULFILLED':
            return Object.assign({}, state, { parent: action.payload });

        default:
            return state;
    }
}
