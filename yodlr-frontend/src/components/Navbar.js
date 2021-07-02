// Navbar component: allows navigation to '/', '/signup', and '/admin'

import {NavLink} from 'react-router-dom';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import './Navbar.css';

const Navbar = () => (
    <div className="Navbar">
      <AppBar position="fixed">
        <Toolbar>
            <Typography className="Navbar-logo" variant="h4">
                <NavLink exact to="/">Yodlr</NavLink>
            </Typography>
            <Typography className="Navbar-link" variant="h6">
                <NavLink exact to="/signup">Signup</NavLink>
            </Typography>
            <Typography className="Navbar-link" variant="h6">
                <NavLink exact to="/admin">Admin</NavLink>
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
);

export default Navbar;