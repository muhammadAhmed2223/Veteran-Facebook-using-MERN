import React, { useEffect,useState} from "react";
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts';


import Posts from "./component/Posts/Posts";
import Form from "./component/Form/Form";

import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId,dispatch]);

    return(
     <Container maxWidth="xl">
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">VetBook</Typography>
        </AppBar>

        <Grow in>
            <Container>
                <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>

        </Grow>
     </Container>
    );
};

export default App;