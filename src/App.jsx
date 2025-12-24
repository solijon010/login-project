import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { mainContext } from "./context/MainContext";
import { GlobalStyle } from "./styles/style";
import { dark, light } from "./styles/theme";
import Route from "./routes/Route";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 0.75rem 1.25rem;
  border-radius: 999px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.greyishBlue};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const LangButton = styled.button`
  position: fixed;
  top: 20px;
  right: 120px;
  padding: 0.75rem 1.25rem;
  border-radius: 999px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.greyishBlue};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

function App() {
  const {
    state: { theme },
    dispatch,
  } = useContext(mainContext);

  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "uz" ? "en" : "uz";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyle />
      <Route />

      <LangButton onClick={toggleLanguage}>
        {i18n.language === "uz" ? "eng" : "uz"}
      </LangButton>

      <ToggleButton onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        {theme === "dark" ? "Light" : "Dark"}
      </ToggleButton>
    </ThemeProvider>
  );
}

export default App;
