import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Search from './Search'

export default function SearchAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <ul>
                        <Link to='/' style={{ textDecoration: "none" }}>
                            <Button
                                classes={{
                                    root: classes.button_root
                                }}>
                                Home</Button>
                        </Link>
                        <Link to='/about' style={{ textDecoration: "none" }}>
                            <Button>About</Button>
                        </Link>
                    </ul>
                    <div className={classes.search}>
                        <Search />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: 'space-between'
    },
    button_root: {
        color: 'white'
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        display: 'flex',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },

    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '40ch',
            '&:focus': {
                width: '60ch',
            },
        },
    },
}));
