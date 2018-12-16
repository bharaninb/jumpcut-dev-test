import { mount } from 'enzyme';
import React from 'react';

import { SequenceActionComponent } from '../../src/components/SequenceAction';

describe('<SequenceActionComponent />', () => {
  const appSequence = {
    isActive: false,
    sequenceGen: { test: 'test' },
    pipelineOption: 'testPipe',
    selectedSequence: 'testSequence',
  };

  describe('Active: true', () => {
    beforeAll(() => {
      appSequence.isActive = true;
    });

    it('should display next button', () => {
      const component = mount(
        <SequenceActionComponent
          appSequence={appSequence}
          activateSequence={jest.fn()}
          handleNext={jest.fn()}
        />,
      );
      const isActiveButton = component.find('button#activateBtn').exists();
      const isNextButton = component.find('button#nextBtn').exists();
      expect(isActiveButton).toBe(false);
      expect(isNextButton).toBe(true);
      component.unmount();
    });

    it('should call handleNext with sequenceGen on "next" click', () => {
      const handleNext = jest.fn();
      const component = mount(
        <SequenceActionComponent
          appSequence={appSequence}
          activateSequence={jest.fn()}
          handleNext={handleNext}
        />,
      );
      component.find('button#nextBtn').simulate('click');

      expect(handleNext).toBeCalledWith(appSequence.sequenceGen);
      component.unmount();
    });
  });

  describe('Active: false', () => {
    beforeAll(() => {
      appSequence.isActive = false;
    });

    it('should display active button', () => {
      const component = mount(
        <SequenceActionComponent
          appSequence={appSequence}
          activateSequence={jest.fn()}
          handleNext={jest.fn()}
        />,
      );
      const isActiveButton = component.find('button#activateBtn').exists();
      const isNextButton = component.find('button#nextBtn').exists();
      expect(isActiveButton).toBe(true);
      expect(isNextButton).toBe(false);
      component.unmount();
    });

    it('should call activateSequence with selectedSequence and pipelineOption on "active" click', () => {
      const activateSequence = jest.fn();
      const component = mount(
        <SequenceActionComponent
          appSequence={appSequence}
          activateSequence={activateSequence}
          handleNext={jest.fn()}
        />,
      );
      component.find('button#activateBtn').simulate('click');

      expect(activateSequence).toBeCalledWith(
        appSequence.selectedSequence,
        appSequence.pipelineOption,
      );
      component.unmount();
    });
  });
});
