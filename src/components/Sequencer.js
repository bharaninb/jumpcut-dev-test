import PropTypes from 'prop-types';
import React from 'react';

import { SequencerContentComponent } from './SequencerContent';
import { SequencerTabsComponent } from './SequencerTabs';
import { PipelineOptionComponent } from './PipelineOption';
import { SequenceActionComponent } from './SequenceAction';

class SequencerComponent extends React.Component {
  render() {
    const {
      appSequence,
      selectSequence,
      fetchNextSequenceValue,
      selectPipeLine,
      activateSequence,
    } = this.props;

    return (
      <main>
        <SequencerTabsComponent
          selectedSequence={appSequence.selectedSequence}
          onChange={selectSequence}
        />
        <PipelineOptionComponent
          pipelineOption={appSequence.pipelineOption}
          onChange={selectPipeLine}
        />
        <SequencerContentComponent sequenceValues={appSequence.sequenceValues} />
        <SequenceActionComponent
          activateSequence={activateSequence}
          handleNext={fetchNextSequenceValue}
          appSequence={appSequence}
        />
      </main>
    );
  }
}

SequencerComponent.propTypes = {
  appSequence: PropTypes.shape().isRequired,
  selectSequence: PropTypes.func.isRequired,
  fetchNextSequenceValue: PropTypes.func.isRequired,
  selectPipeLine: PropTypes.func.isRequired,
  activateSequence: PropTypes.func.isRequired,
};

export { SequencerComponent };
