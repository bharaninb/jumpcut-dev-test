import { shallow } from 'enzyme';
import React from 'react';

import { SequencerTabsComponent } from '../../src/components/SequencerTabs';

describe('<SequencerTabsComponent />', () => {
  it('should match snapshot', () => {
    const onChange = jest.fn();
    const component = shallow(
      <SequencerTabsComponent selectedSequence="factorial" onChange={onChange} />,
    );
    expect(component).toMatchSnapshot();
  });
});
