import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card.style";
import Input from "../../components/ui/Input/Input";
import { TitleL } from "../../styles/style";
import { dark } from "../../styles/theme";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function SignUp() {
  const { t } = useTranslation();
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    repeatPassword: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    if (!formData.get("email").trim()) {
      setErrors({
        email: true,
        password: false,
        repeatPassword: false,
      });
    } else if (!formData.get("password").trim()) {
      setErrors({
        email: false,
        password: true,
        repeatPassword: false,
      });
    } else if (!formData.get("repeat-password").trim()) {
      setErrors({
        email: false,
        password: false,
        repeatPassword: true,
      });
    } else {
      e.target.reset();
    }
  };

  return (
    <div className="sign-up">
      <Card>
        <TitleL>{t("Sign Up")}</TitleL>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <Input
            error={errors.email}
            type="email"
            placeholder={"Email address"}
            name="email"
          />
          <Input
            error={errors.password}
            type="password"
            placeholder="Password"
            name="password"
          />
          <Input
            error={errors.repeatPassword}
            type="password"
            placeholder="Repeat password"
            name="repeat-password"
          />
          <Button style={{ color: dark.colors.white50 }}>
            {t("Create an account")}
          </Button>

          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: ".5rem",
              cursor: "pointer",
            }}
          >
            {t("Already have an account?")}
            <Link to={"/login"} style={{ color: dark.colors.red }}>
              {t("Login")}
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
}

export default SignUp;
