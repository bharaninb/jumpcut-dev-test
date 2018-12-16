import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class PipelineOption extends React.Component {
  handleChange = (event) => {
    const { onChange } = this.props;
    onChange(event.target.value);
  };

  render() {
    const { classes, pipelineOption } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">PipelineOption</FormLabel>
          <RadioGroup
            aria-label="PipelineOption"
            name="PipelineOption"
            className={classes.group}
            value={pipelineOption}
            onChange={this.handleChange}
          >
            <FormControlLabel value="none" control={<Radio />} label="None" />
            <FormControlLabel value="accumulator" control={<Radio />} label="Accumulator" />
            <FormControlLabel value="isEven" control={<Radio />} label="IsEven" />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

PipelineOption.propTypes = {
  classes: PropTypes.shape().isRequired,
  pipelineOption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export const PipelineOptionComponent = withStyles(styles)(PipelineOption);
