import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../translation/i18n";
import { Container } from "../styles/style";

function MainLayout() {
  const { t } = useTranslation();
  return (
    <>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default MainLayout;
