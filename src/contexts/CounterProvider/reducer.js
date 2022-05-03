import * as types from './types';

export const reducer = (state, action) => {
    switch(action.type) {
        case types.INCREMENT_COUNTER:
            return {...state, ...action.payload};

        case types.DECREMENT_COUNTER:
            return {...state, ...action.payload};

        default: return {...state};
    }
}