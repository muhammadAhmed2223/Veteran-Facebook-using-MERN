import React, {useState,useEffect} from "react";
import { Paper, Typography, TextField, Button, TextareaAutosize } from "@material-ui/core";
import FileBase from 'react-file-base64';
import useStyles from './styles';
import {useDispatch,useSelector} from "react-redux";
import {createPost, updatePost} from "../../actions/posts"; 

const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
        caption: '', description: '', selectedFile: ''
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
const classes = useStyles();
const dispatch = useDispatch();

useEffect(() => {
    if(post) setPostData(post);
}, [post]);

const handleSubmit = (e) => {
    e.preventDefault();

    if(currentId){
        dispatch(updatePost(currentId, postData));
       
    }else{
        dispatch(createPost(postData)); 
    }
    clear();

    
}

const clear = () => {
    setCurrentId(null);
    setPostData({caption: '', description: '', selectedFile: ''});
}

    return (
        <Paper>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} Post</Typography>
                <TextField name="caption" variant="outlined" label="Caption" fullWidth value={postData.caption} onChange={(e) => setPostData({...postData,caption: e.target.value})}/>
                <TextField multiline rows={4} name="description" variant="outlined" label="Description" fullWidth value={postData.description} onChange={(e) => setPostData({...postData,description: e.target.value})}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" visibility="hidden" multiple={false} onDone={({base64}) => setPostData({...postData,selectedFile: base64})}/>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};

export default Form;