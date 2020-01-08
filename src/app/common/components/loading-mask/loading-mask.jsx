import React from 'react';
import {
  LoadingMaskWrapper,
  LoadingMaskOverlay,
  LoadingMessage,
} from './loading-mask-style';

const LoadingMask = () => {
  return (
    <LoadingMaskWrapper>
      <LoadingMaskOverlay></LoadingMaskOverlay>
      <LoadingMessage>Loading...</LoadingMessage>
    </LoadingMaskWrapper>
  );
};

LoadingMask.propTypes = {};

export default LoadingMask;
