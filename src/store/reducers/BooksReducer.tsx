import {FETCH_BOOKS} from '../actions/types'

export default function BookReducer(state ={books:[],total:0,key:''}, action:any) {
    switch (action.type) {
        case FETCH_BOOKS:
            return action.payload
        default:
            return state
    }
}