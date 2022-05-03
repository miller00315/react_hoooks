import { useEffect, useRef, useState } from "react";


const isObjectEqual = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
}

export const useFetch = (url, options) => {

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(false);

    const requestInfoRef  = useRef(url); // Elimina a necessadade de dependencia no useEffect
    const optionsRef = useRef(options);

    useEffect(() => {

        if (!isObjectEqual(url, requestInfoRef.current)) {
            requestInfoRef.current = url;
            setShouldLoad(state => !state);
        } else if (!isObjectEqual(options, optionsRef.current)) {
            optionsRef.current = options;
            setShouldLoad(state => !state);
        }

    }, [url, options]);

    useEffect(() => {
        let wait = false; // evita que um set seja executado em um momento inoportuno

        const controller = new AbortController();

        const signal = controller.signal;

        setLoading(true);

        const fetchData = async () => {

            await new Promise(r => setTimeout(r, 3000));

            try {
                const response = await fetch(requestInfoRef.current, {
                    ...optionsRef.current, 
                    signal
                
                });

                const jsonResult = await response.json();

                if(!wait) setResult(jsonResult);
            } catch (e) {
                throw(e);
            }
        }

        fetchData()
            .then(() =>  {if(!wait) setLoading(false)})
            .catch(() => {if(!wait)  setLoading(false)});

       return () => { 
            wait = true; 
            controller.abort();
        };

    }, [shouldLoad]);

    return [result, loading];
};