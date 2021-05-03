import React, { useContext } from 'react'

import { Card, CardContent , CardHeader , Typography , Grid , Divider } from '@material-ui/core';
import {ExpenseTrackerContext} from '../../context/context'

import useStyles from "./styles";
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
    const classes = useStyles();
    const {balance} = useContext(ExpenseTrackerContext);
    return (
        <Card className = {classes.root}>
            <CardHeader title = "Main" subheader = "Shrusty Singh"/>
            <CardContent>
                <Typography variant = "h5" align = "center">Total Money ${balance}</Typography>
                <Typography variant = "subtitle1" style = {{lineHeight : "1.5em", marginTop : "30px"}}>
                     Try saying:
                </Typography>
                <Divider/>
                <Form/>
            </CardContent>
            <CardContent className = {classes.cardContent}>
                <Grid container spacing = {2}>
                    <Grid item xs = {12}>
                        <List/>
                    </Grid>
                </Grid>
            </CardContent>
            
        </Card>
    )
}

export default Main;
