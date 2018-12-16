import { shallow } from 'enzyme';
import React from 'react';

import { SequencerContentComponent } from '../../src/components/SequencerContent';

describe('<SequencerContentComponent />', () => {
  it('should match snapshot', () => {
    const component = shallow(
      <SequencerContentComponent sequenceValues={[2]} />,
    );
    expect(component).toMatchSnapshot();
  });
});
