import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from './styles';
import {Grid} from "@material-ui/core";

const Posts = ({setCurrentId}) => {
const post = useSelector((state) => state.posts);

const classes = useStyles();
    return (

            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {post.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
    )};

export default Posts;