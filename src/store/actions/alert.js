import {v4 as uuid} from 'uuid'
import * as actionTypes from './actionTypes';


export const setAlert=(msg,alertType)=> dispatch =>{
const id = uuid();
dispatch({
    type: actionTypes.SET_ALERT,
    payload:{msg, alertType, id}
})

setTimeout(() => dispatch({
    type: actionTypes.REMOVE_ALERT,
    payload:id,
}), 4000)
}
