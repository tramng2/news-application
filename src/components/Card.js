import React from 'react'
import CardItem from './CardItem';
import { Link } from 'react-router-dom';

function Card({ data }) {

    return (
        <div className="card">
            {data.map((item, index) =>
                <Link className="card_item" key={index} to={`/${index}/${item.author}/${item.title}`}>
                    <CardItem item={item} className="card_item" />
                </Link>
            )}
        </div>
    )
}

export default Card
