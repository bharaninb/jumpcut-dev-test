import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  selectSequence,
  fetchNextSequenceValue,
  activateSequence,
  selectPipeLine,
} from '../redux/actions';
import { SequencerComponent } from './Sequencer';

const mapStateToProps = state => ({
  appSequence: state.appSequence,
});

const mapDispatchToProps = dispatch => ({
  selectSequence: bindActionCreators(selectSequence, dispatch),
  fetchNextSequenceValue: bindActionCreators(fetchNextSequenceValue, dispatch),
  selectPipeLine: bindActionCreators(selectPipeLine, dispatch),
  activateSequence: bindActionCreators(activateSequence, dispatch),
});

export const SequencerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SequencerComponent);
