import { Input as InputStyle, InputWrraper } from "./Input.style";
import { dark } from "../../../styles/theme";
import { useTranslation } from "react-i18next";

function Input({ name, type, placeholder, error }) {
  const { t } = useTranslation();
  return (
    <InputWrraper style={{ width: "100%" }}>
      <InputStyle
        style={{
          borderBottomColor: error ? dark.colors.red : dark.colors.greyishBlue,
        }}
        name={name}
        type={type}
        placeholder={t(placeholder)}
      />
      {error && <span>{t("Can't be empty")}</span>}
    </InputWrraper>
  );
}

export default Input;
