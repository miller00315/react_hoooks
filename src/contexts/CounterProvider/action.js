import * as types from './types';

export const incrementCounter = (dispatch, counter) => {
    dispatch({type: types.INCREMENT_COUNTER, payload: { counter: counter + 1}})
}

export const decrementCounter = (dispatch, counter) => {
    dispatch({type: types.DECREMENT_COUNTER, payload: { counter: counter - 1}})
}