import {FETCH_AUTHOR} from '../actions/types'

export default function AuhtorReducer(state = {}, action:any) {

    switch (action.type) {
        case FETCH_AUTHOR:
            return action.payload
        default:
            return state
    }
}