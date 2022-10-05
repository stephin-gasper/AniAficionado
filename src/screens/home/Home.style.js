import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => props.theme.primaryColor};
  padding: 5px 10px 0;
  flex: 1;
`;

export const CardWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -2.5px;
`;
