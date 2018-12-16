import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3,
    textAlign: 'center',
  },
});

class SequenceAction extends React.Component {
  handleNext = () => {
    const { handleNext, appSequence } = this.props;
    handleNext(appSequence.sequenceGen);
  };

  handleActive = () => {
    const { activateSequence, appSequence } = this.props;
    activateSequence(appSequence.selectedSequence, appSequence.pipelineOption);
  };

  render() {
    const { classes, appSequence } = this.props;

    if (appSequence.isActive) {
      return (
        <div className={classes.root}>
          <Button variant="contained" color="primary" size="large" onClick={this.handleNext} id="nextBtn">
              Next
          </Button>
        </div>
      );
    }

    return (
      <div className={classes.root}>
        <Button variant="contained" color="primary" size="large" onClick={this.handleActive} id="activateBtn">
            Activate
        </Button>
      </div>
    );
  }
}

SequenceAction.propTypes = {
  classes: PropTypes.shape().isRequired,
  appSequence: PropTypes.shape().isRequired,
  activateSequence: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export const SequenceActionComponent = withStyles(styles)(SequenceAction);
