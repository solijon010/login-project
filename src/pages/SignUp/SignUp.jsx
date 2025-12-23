import { Card } from "../../components/ui/Card/Card.style";
import { Input } from "../../components/ui/Input/Input.style";
import { TitleL } from "../../styles/style";

function SignUp() {
  return (
    <div className="sign-up">
      <Card>
        <TitleL>Sign Up</TitleL>
        <div>
          <Input placeholder="Email address" />
        </div>
      </Card>
    </div>
  );
}

export default SignUp;
