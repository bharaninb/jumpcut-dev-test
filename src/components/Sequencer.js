import PropTypes from 'prop-types';
import React from 'react';

import { SequencerContentComponent } from './SequencerContent';
import { SequencerTabsComponent } from './SequencerTabs';

class SequencerComponent extends React.Component {
  componentDidMount() {
    const { sequenceGen, selectSequence, selectedSequence } = this.props;
    const isEmptyGen = Object.keys(sequenceGen).length === 0;
    if (isEmptyGen) {
      selectSequence(selectedSequence);
    }
  }

  render() {
    const {
      selectedSequence,
      sequenceValues,
      selectSequence,
      sequenceGen,
      fetchNextSequenceValue,
    } = this.props;

    return (
      <main>
        <SequencerTabsComponent selectedSequence={selectedSequence} onChange={selectSequence} />
        <SequencerContentComponent
          sequenceValues={sequenceValues}
          sequenceGen={sequenceGen}
          handleNext={fetchNextSequenceValue}
        />
      </main>
    );
  }
}

SequencerComponent.propTypes = {
  selectedSequence: PropTypes.string.isRequired,
  sequenceValues: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectSequence: PropTypes.func.isRequired,
  sequenceGen: PropTypes.shape().isRequired,
  fetchNextSequenceValue: PropTypes.func.isRequired,
};

export { SequencerComponent };
