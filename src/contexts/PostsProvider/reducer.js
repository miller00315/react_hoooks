import * as types from './types';

export const reducer = (state, action) => {

    switch (action.type) {
        case types.POSTS_LOADING:
            return { ...state, loading: true};

        case types.POSTS_SUCCESS:
            return { ...state, ...action.payload, loading: false}

        case types.POSTS_FAILED:
            return { ...state, ...action.payload, loading: false}

        default: return {...state};
    }
}