import React from 'react';
import { shallow } from 'enzyme';

import { HeaderComponent } from '../../src/components/Header';

describe('<HeaderComponent />', () => {
  it('should match snapshot', () => {
    const component = shallow(<HeaderComponent title="sample title" />);
    expect(component).toMatchSnapshot();
  });
});
