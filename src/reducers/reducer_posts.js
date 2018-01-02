import {FETCH_POSTS} from '../actions';
import _ from 'lodash';

export default function(state = {}, action){ //default state to obj
    switch(action.type){
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');//[post1, post2]
            //{4:post}
        
        default:
            return state;
    }
}