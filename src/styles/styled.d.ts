// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      background: string;
      primary: string;
      secondary: string;
    };
  }
}
