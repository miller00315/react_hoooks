import { useEffect, useState } from 'react';
import {useFetch} from '../../hooks/UseFetch';

export const Home = () => {
    useFetch();

    const [postId, setPostId] = useState('');

    const [result, loading] = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        headers: {
            abc: 1
        }
    });

    const handleClick = (id) => {
        setPostId(id);
    }
    
    if(loading) {
        return (<h1>loading</h1>)
    }

    if(!loading && result) {
        return (
            <div>
                {
                    result?.length > 0 ?
                        result.map(post => <div key={post.id} onClick={() => handleClick(post.id)}>
                                            <p key={post.id}>{post.title}</p>
                                        </div>
                                ):
                                (
                                    <div key={result.id} onClick={() => handleClick('')}>
                                        <p>{result.title}</p>
                                    </div> 
                                )
                }
            </div>
        );
    }

    return (<h1>Oi</h1>);
};