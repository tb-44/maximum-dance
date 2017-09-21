import axios from 'axios';

//SET INITIAL STATE
const initialState = {
    parent: {}

}

//ACTION TYPES
const GET_PARENT_INFO = "GET_PARENT_INFO";
const ADD_PARENT_INFO = "ADD_PARENT_INFO";
// const ADD_DANCER_INFO = "ADD_DANCER_INFO";

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
    const newParentInfo = axios.post('http://localhost:3005/api/create_parent', obj).then( res => {
        return res.data
    })
    return {
        type: ADD_PARENT_INFO,
        payload: newParentInfo
    }
}

// export function addDancerInfo(obj){
//     const newDancerInfo = axios.post('http://localhost:3005/api/create_dancer', obj).then( res => {
//         return res.data
//     })
//     return {
//         type: ADD_DANCER_INFO,
//         payload: newDancerInfo
//     }
// }

//REDUCER FUNCTION
export default function reducer(state = initialState, action) {
    switch(action.type) {

        case GET_PARENT_INFO + '_PENDING':
            return state;
            
        case GET_PARENT_INFO + '_FULFILLED':
            return Object.assign({}, state, { parent: action.payload });

        case ADD_PARENT_INFO + '_FULFILLED':
            return Object.assign({}, state, { parent: action.payload });

        // case ADD_DANCER_INFO + '_FULFILLED':
        //     return Object.assign({}, state, { parent: action.payload });

        default:
            return state;
    }
}
