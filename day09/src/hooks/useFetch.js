import React, { useEffect, useState } from 'react';

export const useFetch = ( url ) => {
    const [data, setData] = useState([])

    const [loading , setLoding] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch( url )
        .then( res => res.json())
        .then( res => {
            setData(res)
            setError(null)
            setLoding(true)
        })
        .catch( error => {
            setError(error)
            setData([])
            setLoding(false)
        })

    },[url])

    return {data , error, loading}
};
