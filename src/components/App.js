import React from 'react';

import { HeaderComponent } from './Header';
import { SequencerContainer } from './SequencerContainer';

export const AppComponent = () => (
  <React.Fragment>
    <HeaderComponent title="Jumpcut Dev Test" />
    <SequencerContainer />
  </React.Fragment>
);
