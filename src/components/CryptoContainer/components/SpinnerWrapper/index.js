import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

import { Container } from './styles';

const SpinnerWrapper = ({
  visible,
  textContent = 'Loading...',
  textStyle = { color: '#253145' },
  animation = 'fade'
}) => (
  <Container>
    <Spinner
      {...{
        visible,
        textContent,
        textStyle,
        animation
      }}
    />
  </Container>
);

export default SpinnerWrapper;
