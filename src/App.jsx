import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RoutesMain } from "./routes/routesMain";

import theme from "./theme";
import GlobalStyle from "./global/globalStyles";


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RoutesMain />
      <ToastContainer theme="dark" />
    </ThemeProvider>
  )
}

export default App;
