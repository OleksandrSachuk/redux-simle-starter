import { NAME } from '../actions/types';

export default function (state = [], action) {
    switch(action.type){
        case NAME:
            return [...state, action.payload];
        default:
            return state;
    }
}