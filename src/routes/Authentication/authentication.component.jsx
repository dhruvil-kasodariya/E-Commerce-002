import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignIn from "../../components/sign-in/sign-in.component";
import { AuthenticationContainer } from "./authentication.style.jsx";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  return (
    <Fragment>
      {currentUser ? (
        navigate("/")
      ) : (
        <AuthenticationContainer>
          <SignIn />
          <SignUpForm />
        </AuthenticationContainer>
      )}
    </Fragment>
  );
};

export default Authentication;
