import P from 'prop-types';
import { useReducer } from 'react';

import { PostsContext } from "./context";
import { data } from './data';
import { reducer } from './reducer';

export const PostProvider = ({children}) => {
    const [postsState, postsDispatch] = useReducer(reducer, data);

    return (
        <PostsContext.Provider value={{postsState, postsDispatch}}>
            {children}
        </PostsContext.Provider>);
};

PostProvider.propTypes = {
    children: P.oneOfType([P.string, P.element, P.node]).isRequired,
}



