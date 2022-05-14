import React from "react";
import { ViewStyle } from "react-native";

import { Container as ContainerStyle } from "./styles";

const Container: React.FC = ({ children }) => {
  return (
    <ContainerStyle>
      <>{children}</>
    </ContainerStyle>
  );
};

export default Container;
