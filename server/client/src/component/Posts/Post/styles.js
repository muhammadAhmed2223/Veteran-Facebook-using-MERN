import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    backgroundColor:'white',
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    position: 'relative',
    borderBottom: '1px solid rgba(156, 156, 156, 0.2)',
    borderTop: '1px solid rgba(156, 156, 156, 0.2)',
    paddingTop:'10px',
    width:'100%',
  },
  overlay: {
    position: 'absolute',
    top: '30px',
    left: '50px',
    color: 'white',
    background:'rgba(61, 61, 61,0.2)',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '30px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});