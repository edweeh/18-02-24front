import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Homeuser = () => {
const navigate = useNavigate();

  return (
    <div>
      {/* App Bar with unique color */}
      <AppBar position="static" sx={{ backgroundColor: '#2196F3' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            Your App Name
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container>
        {/* Your main content goes here */}
        <Typography variant="h4" component="div" sx={{ marginTop: 4 }}>
          Welcome to Your App!
        </Typography>
        <Typography variant="body1" component="div" sx={{ marginTop: 2 }}>
          This is your home page content.
        </Typography>
      </Container>
    </div>
  );
};

export default Homeuser;
