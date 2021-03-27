import React, { useState, useEffect, useContext } from 'react'
import { DataContext } from "../DataContext"
import SearchIcon from '@material-ui/icons/Search';
import { Button, InputBase } from '@material-ui/core';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


import axios from 'axios'

function Search() {
    const classes = useStyles();

    const [data, setData] = useContext(DataContext);
    const [searchInput, setSearchInput] = useState("")
    const [searchRes, setSearchRes] = useState("")
/*eslint-disable */
    useEffect(() => {
        axios 
        .get(`https://gnews.io/api/v4/search?q=${searchInput}&token=${process.env.REACT_APP_NEWS_API_KEY}`)
        .then (res => {
            let res_list = res.data.articles;
            setData(res_list);
            setSearchInput('');
        } )
        .catch(err => console.log('line 21 Search lie', err))
    }, [searchRes])
/*eslint-enable */

    const onChange = (event) => {
        setSearchInput(event.target.value)
    }

    const findNews = (event) => {
        event.preventDefault();  
        setSearchRes(searchInput);
    }


    return (
        <DataContext.Consumer>
            {value => {
                return (
                    <ThemeProvider theme={theme}>
                        <Button type="submit">
                            <SearchIcon/>
                        </Button>
                        <form onSubmit={findNews}>
                            <InputBase
                                type="text"
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                name="searchInput"
                                value={searchInput}
                                onChange={onChange}
                            />
                        </form>
                    </ThemeProvider>
                )
            }}
        </DataContext.Consumer>
    )
}

export default Search



const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                color: 'white'
            },
        }
    }
});
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: 'space-between'
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
