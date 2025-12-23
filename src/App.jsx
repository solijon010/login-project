import { ThemeProvider } from "styled-components";
import Route from "./routes/Route";
import { GlobalStyle } from "./styles/style";
import { light,dark } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={dark}>
    <GlobalStyle/>
      <Route />
    </ThemeProvider>
  );
}

export default App;
