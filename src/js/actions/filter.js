import {SET_FILTER} from '../constants/filter';

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        filter
    };
}