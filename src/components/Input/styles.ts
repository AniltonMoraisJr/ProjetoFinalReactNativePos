import styled from "styled-components/native";
import Color from "color";

export const InputContainer = styled.View``;

export const InputElement = styled.TextInput`
  padding: 10px;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) =>
    Color(props.theme.colors.primary).darken(0.3).hex()};
`;
