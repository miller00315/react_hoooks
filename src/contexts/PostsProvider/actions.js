import * as types from './types';

export const loadPosts = async (dispatch) => {

    dispatch({type: types.POSTS_LOADING});

    try {
        const postRaw = await fetch('https://jsonplaceholder.typicode.com/posts');

        const posts = await postRaw.json();

        return () => dispatch({type: types.POSTS_SUCCESS, payload: { posts }})
    } catch (e) {

    }
};

