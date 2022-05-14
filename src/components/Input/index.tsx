import React from "react";
import { TextInputProps, View } from "react-native";

import { InputContainer, InputElement } from "./styles";

interface InputProps extends TextInputProps {}

const Input: React.FC<InputProps> = ({ children, ...rest }) => {
  return (
    <InputContainer>
      <InputElement {...(rest as any)}></InputElement>
    </InputContainer>
  );
};

export default Input;
