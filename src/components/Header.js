import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

export const HeaderComponent = ({ title }) => (
  <AppBar position="absolute">
    <Toolbar>
      <Typography component="h1" variant="h6" color="inherit" noWrap>
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
};
