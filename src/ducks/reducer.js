import axios from 'axios';

//SET INITIAL STATE
const initialState = {
    parent: {
        id: ''
    }
}

//ACTION TYPES
const GET_PARENT_INFO = "GET_PARENT_INFO";
const ADD_PARENT_INFO = "ADD_PARENT_INFO";
const ADD_DANCER_INFO = "ADD_DANCER_INFO";
const GET_DANCER_INFO = "GET_DANCER_INFO";
const GET_ALL_INFO = "GET_ALL_INFO";

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
    const newParentInfo = axios.post('/api/create_parent', obj).then( res => {
        return res.data
    })
    return {
        type: ADD_PARENT_INFO,
        payload: newParentInfo
    }
}

export function addDancerInfo(obj, id){
    const newDancerInfo = axios.post('/api/create_dancer/' + id, obj).then( res => {
        return res.data;
    })
    return {
        type: ADD_DANCER_INFO,
        payload: newDancerInfo
    }
}

export function getDancerInfo(id) {
    const displayDancerInfo = axios.get('/api/getDancerInfo/', id).then( res => {
        console.log(res);
        return res.data;
    })
    return {
        type: GET_DANCER_INFO,
        payload: displayDancerInfo
    }
}

export function getAllInfo(id) {
    const getAllInformation = axios.get('/api/getAllInfo', id).then( res => {
        return res.data;
    })
    return {
        type: GET_ALL_INFO,
        payload: getAllInformation
    }
}


//REDUCER FUNCTION
export default function reducer(state = initialState, action) {
    switch(action.type) {

        case GET_PARENT_INFO + '_PENDING':
            return state;
            
        case GET_PARENT_INFO + '_FULFILLED':
            return Object.assign({}, state, { parent: action.payload });

        case ADD_PARENT_INFO + '_FULFILLED':
            return Object.assign({}, state, { parent: action.payload });

        case ADD_DANCER_INFO + '_FULFILLED':
            return Object.assign({}, state, { parent: action.payload });
        
        case GET_DANCER_INFO + '_FULFILLED':
            return Object.assign({}, state, { parent: action.payload });

        case GET_ALL_INFO + '_FULFILLED':
            return Object.assign({}, state, { parent: action.payload });

        default:
            return state;
    }
}
