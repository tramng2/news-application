import React, { useContext } from 'react';
import Card from './Card';
import {DataContext} from '../DataContext'
 
function Home() {
    const [data, setData] = useContext(DataContext);
    return (
        <div>
            {!data.length ? <h4>Loading</h4> : <Card data={data}/>}
        </div>
    )
}

export default Home
