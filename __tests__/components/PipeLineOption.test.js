import { shallow } from 'enzyme';
import React from 'react';

import { PipelineOptionComponent } from '../../src/components/PipelineOption';

describe('<PipelineOptionComponent />', () => {
  it('should match snapshot', () => {
    const component = shallow(
      <PipelineOptionComponent pipelineOption="none" onChange={jest.fn()} />,
    );
    expect(component).toMatchSnapshot();
  });
});
