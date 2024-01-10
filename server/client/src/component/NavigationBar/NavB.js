import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useStyles from './styles';

const Navbar = () => {
  const [vet, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/');

    setUser(null);
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to='/' className={classes.brandContainer}>
        <img src={logo} alt="logo" height="60" />
      </Link>


      <Toolbar className={classes.toolbar}>
        {vet?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={vet?.result.name} src={vet?.result.imageUrl}>{vet?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{vet?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;