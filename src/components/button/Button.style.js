import styled from 'styled-components/native';

export const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
  border-radius: 10px;
  padding: 12px 25px;
  background-color: ${props => props.theme.tertiaryColor};
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.textColor};
  font-weight: bold;
  align-self: center;
`;
