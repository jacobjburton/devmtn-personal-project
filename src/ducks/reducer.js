import axios from 'axios';

const initialState = 
{
    user: {}
};

const GET_USER_INFO = 'GET_USER_INFO',
    LOGOUT_USER = 'LOGOUT_USER';


export function getUser()
{
    let userData = axios.get('/auth/me').then(res => 
    {
        return res.data;
    });
    return (
    {  
        type: GET_USER_INFO,
        payload: userData  
    });
}

export function logoutUser()
{
    return (
    {
        type: LOGOUT_USER,
        payload: ''
    });
}

export default function reducer(state = initialState, action)
{
    switch (action.type)
    {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload});
        case LOGOUT_USER + '_FULFILLED':
            return Object.assign({}, {user: action.payload});
        default:
            return state;
    }
}