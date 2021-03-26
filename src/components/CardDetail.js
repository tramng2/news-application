import React, { useState, useEffect } from 'react'
import '../App.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, Card, CardMedia, CardHeader, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


function CardDetail() {
    const { index, title } = useParams();
/*eslint-disable */
    useEffect(() => {
        fetchItem()
    }, [index, title]);
/*eslint-enable */

    const [item, setItem] = useState('');

    const fetchItem = async () => {
        const { data: { articles } } = await axios
                .get(`https://gnews.io/api/v4/search?q=example&token=${process.env.REACT_APP_NEWS_API_KEY}`)

        const article = articles.filter((el, idx) => idx === +index)
        setItem(article);
    }

    const classes = useStyles();
    return (
        <div>
            {!item.length ? <h4>Loading</h4> :
                 <Card className={classes.root}>
                 <CardHeader
                     className={classes.header}
                     title={item[0].title}
                     subheader={`public at: ${item[0].publishedAt}`}
                 />
                  <CardMedia
                    className={classes.media}
                    image={item[0].image}
                />
                 <CardContent>
                     <Typography variant="body2" color="textSecondary" component="p">
                         {item[0].description}
                     </Typography>
                 </CardContent>
             </Card>
            }

        </div>
    )
}

export default CardDetail;

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '50%',
        margin: '0 auto',
        border: "none", 
        boxShadow: "none",
        borderRadius:0,
        marginTop: '2rem'

    },
    media: {
        paddingTop: '56.25%', // 16:9
    },
})); 

