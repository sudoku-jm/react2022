import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const useAxios = ( url ) => {
    const [data, setData] = useState([])
    const [loading , setLoding] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get( url )
        .then( res => {
            setData(res.data)
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
