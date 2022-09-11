import styled from 'styled-components/native';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.View`
  background-color: ${(props) => props.theme.primaryColor};
  padding: 5px 20px 0;
  flex: 1;
`;
