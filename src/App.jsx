import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/globalStyles";
import theme from "./theme/theme";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { RoutesMain } from "./routes/routesMain";


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RoutesMain />
      <ToastContainer
        theme="dark"
      />
    </ThemeProvider>
  )
}

export default App;
