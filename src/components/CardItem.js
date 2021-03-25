import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
    overrides: {
        MuiCardHeader: {
            root: {
                alignItems: 'start'
            },
            title: {
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            }
        }
    }
});

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
}));

export default function CardItem({ item }) {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Card className={classes.root}>
                <CardHeader
                    className={classes.header}
                    title={item.title}
                    subheader={`public at: ${item.publishedAt}`}
                />
                <CardMedia
                    className={classes.media}
                    image={item.urlToImage}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.description}
                    </Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}
