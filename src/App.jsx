import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/globalStyles";
import theme from "./theme/theme";

import { RoutesMain } from "./routes/routesMain";


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RoutesMain />
    </ThemeProvider>
  )
}

export default App;
