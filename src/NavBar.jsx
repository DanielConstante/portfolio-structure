import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Link, Link as RouterLink } from "react-router-dom";
import styled from 'styled-components';
import { ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Projects', 'Resume', 'Contact Me'];



function NavBar(props) {
      const { window } = props;
      const [mobileOpen, setMobileOpen] = React.useState(false);
      const [anchorEl, setAnchorEl] = React.useState(null);

      const handleDrawerToggle = () => {
            setMobileOpen((prevState) => !prevState);
      };

      const drawer = (
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ my: 2 }}>
                        MUI
                  </Typography>
                  <Divider />
                  <List>
                        <ListItem component={Link} to="/">
                              <ListItemIcon>
                                    {/* <Icon>bar_chart</Icon> */}
                              </ListItemIcon>
                              <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem component={Link} to="/about">
                              <ListItemIcon>
                                    {/* <Icon>bar_chart</Icon> */}
                              </ListItemIcon>
                              <ListItemText primary="About" />
                        </ListItem>
                        <ListItem component={Link} to="/resume">
                              <ListItemIcon>
                                    {/* <Icon>bar_chart</Icon> */}
                              </ListItemIcon>
                              <ListItemText primary="Resume" />
                        </ListItem>
                        <ListItem component={Link} to="/projects">
                              <ListItemIcon>
                                    {/* <Icon>bar_chart</Icon> */}
                              </ListItemIcon>
                              <ListItemText primary="Projects" />
                        </ListItem>
                        <ListItem component={Link} to="/blog">
                              <ListItemIcon>
                                    {/* <Icon>bar_chart</Icon> */}
                              </ListItemIcon>
                              <ListItemText primary="Blog" />
                        </ListItem>
                  </List>
            </Box>
      );

      const container = window !== undefined ? () => window().document.body : undefined;

      return (
            <>
                  <CssBaseline />
                  <AppBar position='fixed' style={{}}>
                        <Toolbar>
                              <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ mr: 2, display: { sm: 'none' } }}
                              >
                                    <MenuIcon />
                              </IconButton>
                              <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                              >
                                    MUI
                              </Typography>
                              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                    <Button component={RouterLink} to="/" sx={{ color: '#fff' }}>
                                          Home
                                    </Button>
                                    <Button component={Link} to="/about" sx={{ color: '#fff' }}>
                                          About
                                    </Button>
                                    <Button component={Link} to="/resume" sx={{ color: '#fff' }}>
                                          Resume
                                    </Button>
                                    <Button component={Link} to="/projects" sx={{ color: '#fff' }}>
                                          Projects
                                    </Button>
                                    <Button component={Link} to="/contact-me" sx={{ color: '#fff' }}>
                                          Contact
                                    </Button>
                                    <Button component={Link} to="/blog" sx={{ color: '#fff' }}>
                                          Blog
                                    </Button>

                              </Box>
                        </Toolbar>
                  </AppBar >
                  <nav>
                        <Drawer
                              container={container}
                              variant="temporary"
                              open={mobileOpen}
                              onClose={handleDrawerToggle}
                              ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                              }}
                              sx={{
                                    display: { xs: 'block', sm: 'none' },
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                              }}
                        >
                              {drawer}
                        </Drawer>
                  </nav>
                  <Box component="main" sx={{ p: 3 }}>
                        <Toolbar />
                  </Box>
            </>


      );
}
NavBar.propTypes = {
      /**
       * Injected by the documentation to work in an iframe.
       * You won't need it on your project.
       */
      window: PropTypes.func,
};

export default NavBar;
