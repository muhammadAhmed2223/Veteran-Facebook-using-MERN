import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    form: {
        marginTop: '30px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '10px',
        background: 'white',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
        background:'white',
    },
    buttonSubmit: {
        marginBottom: 10,
    },
    button: {
        left: '5px',
        background: '#5372F0',
        border: '1px solid #5372F0',
    },
}));
    