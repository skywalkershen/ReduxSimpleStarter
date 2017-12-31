<<<<<<< HEAD
import {FETCH_WEATHER} from '../actions/index'
export default function(state = [], action){
    switch(action.type){
        case FETCH_WEATHER:
            //remember to return new state
            //es6 : return [action.payload.data ...state];
            return state.concat([action.payload.data]);
    }
    return state;

=======
export default function(state = null, action){
    console.log('action received', action);
    return state;
>>>>>>> 8a46e36bf784e1366fdfd1c22b4832a6db53fbc0
}