import {FETCH_WEATHER} from '../actions/index'
export default function(state = [], action){
    switch(action.type){
        case FETCH_WEATHER:
            //remember to return new state
            //es6 : return [action.payload.data ...state];
            return state.concat([action.payload.data]);
    }
    return state;

}