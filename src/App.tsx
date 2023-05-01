import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { CartContextProvider } from "./context/CartContext";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <Router />
        <GlobalStyles />
      </CartContextProvider>
    </ThemeProvider>
  );
}
