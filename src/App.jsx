// /src/App.jsx
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { mainContext } from "./context/MainContext";
import { GlobalStyle } from "./styles/style";
import { dark, light } from "./styles/theme";
import Route from "./routes/Route"; // sizning route faylingiz

import styled from "styled-components";

// Toggle button style
const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 0.75rem 1.25rem;
  border-radius: 999px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.greyishBlue};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  }
`;

function App() {
  const {
    state: { theme },
    dispatch,
  } = useContext(mainContext);

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyle />
      <Route />
      <ToggleButton onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        {theme === "dark" ? "Light" : "Dark"}
      </ToggleButton>
    </ThemeProvider>
  );
}

export default App;
