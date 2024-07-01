import "./styles.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

function LoginForm({ inputData, buttonData }) {
  const emailInput = {
    type: "email",
    name: "Email",
    placeholder: "Enter your email",
  };
  const passwordInput = {
    type: "password",
    name: "Password",
    placeholder: "Enter your password",
  };
  const button = {
    type: "Main",
    buttonName: "Login",
  };
 
  return (
    <form className="login-form" action="" method="post">
      <header className="header-form">Login form</header>
      <Input inputData={emailInput} />
      <Input inputData={passwordInput} />
      <Button buttonData={button} />
    </form>
  );
}

export default LoginForm;
