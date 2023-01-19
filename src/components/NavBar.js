import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';


const NavBar = (props) => {

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton href='/' onMouseOver={props.onMouseOver} sx={{ p: 2 }}>
            <Avatar alt="Logo" src="https://images.vexels.com/media/users/3/239034/isolated/preview/2011ded47041cf9ff35bb6da51dae22f-camion-2.png" />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            ECUATRANSPORT
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>  
            <Link to="/ValorAPagar"><Button size='large'  key={'ValorPagar'} sx={{ color: '#fff' }}>Valor a Pagar</Button></Link>
            <Link to="/Sucursales"><Button  size='large'  key={'Sucursales'} sx={{ color: '#fff' }}>Sucursales</Button></Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;