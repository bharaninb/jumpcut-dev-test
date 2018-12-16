import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { uid } from 'react-uid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    textAlign: 'center',
  },
});

const SequencerContent = ({ classes, sequenceValues }) => {
  const valueItems = sequenceValues.map((value, index) => (
    <Grid item key={uid(value, index)}>
      <Paper className={classes.paper}>{value}</Paper>
    </Grid>
  ));

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {valueItems}
      </Grid>
    </div>
  );
};

SequencerContent.propTypes = {
  classes: PropTypes.shape().isRequired,
  sequenceValues: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export const SequencerContentComponent = withStyles(styles)(SequencerContent);
