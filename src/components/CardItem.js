import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core';

export default function CardItem({ item }) {
    const classes = useStyles();
    return (
            <Card className={classes.root}>
                <CardHeader
                    classes={{
                        title: classes.title,
                        root: classes.title_root
                    }}
                    className={classes.header}
                    title={item.title}
                    subheader={`public at: ${item.publishedAt}`}
                />
                <CardMedia
                    className={classes.media}
                    image={item.image}
                />
                <CardContent>
                    <Typography
                        classes={{
                            body2: classes.body2
                        }}
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {item.description}
                    </Typography>
                </CardContent>
            </Card>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        height: '30rem',
        alignItems: 'top'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    title: {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    title_root: {
        alignItems: 'start'
    },
    body2: {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 5,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
}));