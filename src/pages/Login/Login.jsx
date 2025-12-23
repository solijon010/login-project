import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card.style";
import Input from "../../components/ui/Input/Input";
import { TitleL } from "../../styles/style";
import { dark } from "../../styles/theme";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (!formData.get("email").trim()) {
      setErrors({ email: true, password: false });
    } else if (!formData.get("password").trim()) {
      setErrors({ email: false, password: true });
    } else {
      setErrors({ email: false, password: false });
      e.target.reset();
    }
  };

  return (
    <div className="login">
      <Card>
        <TitleL>{t("Login")}</TitleL>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <Input
            error={errors.email}
            type="email"
            placeholder="Email address"
            name="email"
          />
          <Input
            error={errors.password}
            type="password"
            placeholder="Password"
            name="password"
          />
          <Button>{t("Login")}</Button>

          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: ".5rem",
              cursor: "pointer",
            }}
          >
            {t("Don't have an account?")}
            <Link to="/sign-up" style={{ color: dark.colors.red }}>
              {t("Sign Up")}
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
}

export default Login;
