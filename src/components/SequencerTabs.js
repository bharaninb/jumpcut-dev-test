import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import PropTypes from 'prop-types';
import React from 'react';

import { availableSequencers } from '../constants';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: '65px',
  },
});

class SequencerTabs extends React.Component {
  handleChange = (event, value) => {
    const { onChange } = this.props;
    onChange(value);
  };

  render() {
    const { classes, selectedSequence } = this.props;

    const tabList = availableSequencers.map(sequence => (
      <Tab label={sequence.name} value={sequence.id} key={sequence.id} />
    ));

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            id="sequenceTab"
            value={selectedSequence}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            {tabList}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

SequencerTabs.propTypes = {
  classes: PropTypes.shape().isRequired,
  selectedSequence: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export const SequencerTabsComponent = withStyles(styles)(SequencerTabs);
