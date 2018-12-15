import Button from '@material-ui/core/Button';
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

class SequencerContent extends React.Component {
  handleClick = () => {
    const { handleNext, sequenceGen } = this.props;
    handleNext(sequenceGen);
  };

  render() {
    const { classes, sequenceValues } = this.props;

    const valueItems = sequenceValues.map((value, index) => (
      <Grid item key={uid(value, index)}>
        <Paper className={classes.paper}>{value}</Paper>
      </Grid>
    ));

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {valueItems}
          <Grid item xs={12} className={classes.button}>
            <Button variant="contained" color="primary" size="large" onClick={this.handleClick} id="nextBtn">
              Next
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SequencerContent.propTypes = {
  classes: PropTypes.shape().isRequired,
  sequenceValues: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleNext: PropTypes.func.isRequired,
  sequenceGen: PropTypes.shape().isRequired,
};

export const SequencerContentComponent = withStyles(styles)(SequencerContent);
