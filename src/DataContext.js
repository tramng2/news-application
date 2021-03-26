import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = props => {
    const [data, setData] = useState([]);
    console.log(process.env)

    useEffect(() => {
        const getData = async () => {
            const { data: { articles } } = await axios
                .get(`https://gnews.io/api/v4/search?q=example&token=${process.env.REACT_APP_NEWS_API_KEY}`)
            setData(articles)
        }
        getData()
    }, [])
    return (
        <DataContext.Provider value={[data, setData]}>
            {props.children}
        </DataContext.Provider>
    )
}