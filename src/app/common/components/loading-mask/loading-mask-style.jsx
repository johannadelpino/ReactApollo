import styled from 'styled-components';

export const LoadingMaskWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
`;

export const LoadingMaskOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: ;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const LoadingMessage = styled.div`
  font-size: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
