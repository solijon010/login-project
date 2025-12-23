import { Button, } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card.style";
import { Input } from "../../components/ui/Input/Input.style";
import { TitleL } from "../../styles/style";

function SignUp() {
  return (
    <div className="sign-up">
      <Card>
        <TitleL>Sign Up</TitleL>
        <form style={{display:"flex",flexDirection:"column",gap:"1.5rem"}}>
          <Input type="email" placeholder="Email address" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Repeat password" />
          <Button >Create an account</Button>
        </form>
      </Card>
    </div>
  );
}

export default SignUp;
