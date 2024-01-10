import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  
  appBar: {
    margin: '0px 0 0px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'left',
    paddingLeft:'20px',
  },
  heading: {
    color: 'rgb(38, 92, 252)',
    fontFamily:'Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva, Verdana, sans-serif',
    fontWeight: 'bold',
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse"
    }
  }
}));