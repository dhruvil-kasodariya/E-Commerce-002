import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignIn from "../../components/sign-in/sign-in.component";
import "./authentication.style.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
