import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectSequence, fetchNextSequenceValue } from '../redux/actions';
import { SequencerComponent } from './Sequencer';

const mapStateToProps = (state) => {
  const { selectedSequence, sequenceValues, sequenceGen } = state.appSequence;
  return {
    selectedSequence,
    sequenceValues,
    sequenceGen,
  };
};

const mapDispatchToProps = dispatch => ({
  selectSequence: bindActionCreators(selectSequence, dispatch),
  fetchNextSequenceValue: bindActionCreators(fetchNextSequenceValue, dispatch),
});

export const SequencerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SequencerComponent);
