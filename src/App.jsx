import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/globalStyles";
import theme from "./theme/theme";

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      Dev Hub
    </ThemeProvider>
  )
}

export default App;
