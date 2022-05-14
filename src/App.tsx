import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import Container from "./components/Container";
import Login from "./pages/Login";
import { BACKGROUND_COLOR } from "./styles/colors";
import { mainTheme } from "./styles/mainTheme";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <StatusBar style="light" backgroundColor={BACKGROUND_COLOR} />
      <Container>
        <Login />
      </Container>
    </ThemeProvider>
  );
}

export default registerRootComponent(App);
