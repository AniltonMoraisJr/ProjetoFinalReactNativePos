import { DefaultTheme } from "styled-components";
import { BACKGROUND_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from "./colors";

const mainTheme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    primary: PRIMARY_COLOR,
    secondary: SECONDARY_COLOR,
    background: BACKGROUND_COLOR,
  },
};

export { mainTheme };
