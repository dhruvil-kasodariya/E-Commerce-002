import "./sign-in.style.scss";
import { useState } from "react";
import {
  signInWIthGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
const initialUserData = {
  email: "",
  password: "",
};

const SignUpForm = () => {
  const [userData, setUserData] = useState(initialUserData);
  const { email, password } = userData;

  const resetUserData = () => {
    setUserData(initialUserData);
  };

  const signInWithGoogle = async () => {
    await signInWIthGooglePopup();
  };

  const handleFormFieldChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetUserData();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;

        case "auth/user-not-found":
          alert("incorrect email");
          break;

        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-cotainer">
      <h2>Create new account</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="E-mail"
          type="email"
          onChange={handleFormFieldChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleFormFieldChange}
          name="password"
          value={password}
          required
        />
        <div
          //className="buttons-container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button type="submit">SIGN-IN</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign-in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
