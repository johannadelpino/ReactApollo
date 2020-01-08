import styled from 'styled-components';

export const GlobalNavWrapper = styled.div`
  width: 100%;
  border-bottom: solid 1px #000;
  color: #fff;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
`;

export const GlobalNavLink = styled.a`
  display: inline-block;
  text-decoration: none;
  font-family: arial;
  padding: 10px 20px;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
`;
