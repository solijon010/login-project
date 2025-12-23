import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card.style";
import { Input } from "../../components/ui/Input/Input.style";
import { TitleL } from "../../styles/style";
import { dark } from "../../styles/theme";
import { useRef } from "react";

function SignUp() {
  const emailInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ prevenetDefault → preventDefault
    console.log("Email value:", emailInputRef.current.value);
  };

  return (
    <div className="sign-up">
      <Card>
        <TitleL>Sign Up</TitleL>
        <form
          onSubmit={handleSubmit} // ✅ typo tuzatildi
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <Input ref={emailInputRef} type="email" placeholder="Email address" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Repeat password" />
          <Button type="submit">Create an account</Button> {/* type submit qo‘shildi */}

          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: ".5rem",
              cursor: "pointer",
            }}
          >
            Already have an account?
            <Link to={"/login"} style={{ color: dark.colors.red }}>
              Login
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
}

export default SignUp;
