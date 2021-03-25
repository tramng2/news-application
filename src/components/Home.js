import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
 
function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
              const {data: {articles}} = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=60ca52d7e2d644bbbf28bfb212b15827')
              setData(articles);
        }
        getData()    
    },[])
    
    return (
        <div>
            {!data.length ? <h4>Loading</h4> : <Card data={data}/>}
        </div>
    )
}

export default Home
