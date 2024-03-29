import React from "react";
import {Card, CardContent, CardActions, CardMedia, Button, Typography, Container} from "@material-ui/core"; 
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {deletePost,likePost} from '../../../actions/posts';

const Post = ({post, setCurrentId}) => {
const classes = useStyles();
const dispatch = useDispatch();
    return (
        <Container className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.caption}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.caption}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}>
                    EDIT
                </Button>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.caption}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small"/>
                    &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small"/>
                </Button>
            </CardActions>
        </Container>
    );
};

export default Post;