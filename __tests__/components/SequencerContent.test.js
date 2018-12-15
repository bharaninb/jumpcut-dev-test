import { shallow, mount } from 'enzyme';
import React from 'react';

import { SequencerContentComponent } from '../../src/components/SequencerContent';

describe('<SequencerContentComponent />', () => {
  it('should call handleNext with sequenceGen on "next" click', () => {
    const handleNext = jest.fn();
    const sequenceGen = { test: 'test' };
    const component = mount(
      <SequencerContentComponent
        sequenceValues={[2]}
        sequenceGen={sequenceGen}
        handleNext={handleNext}
      />,
    );
    component.find('button#nextBtn').simulate('click');

    expect(handleNext).toBeCalledWith(sequenceGen);
  });

  it('should match snapshot', () => {
    const handleNext = jest.fn();
    const component = shallow(
      <SequencerContentComponent sequenceValues={[2]} sequenceGen={{}} handleNext={handleNext} />,
    );
    expect(component).toMatchSnapshot();
  });
});
