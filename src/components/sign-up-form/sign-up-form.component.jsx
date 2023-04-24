import { useState, useContext } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../context/user.context";
import "./sign-up-form.style.scss";
const initialUserData = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [userData, setUserData] = useState(initialUserData);
  const { displayName, email, password, confirmPassword } = userData;

  const { setCurrentUser } = useContext(UserContext);

  const resetUserData = () => {
    setUserData(initialUserData);
  };

  const handleFormFieldChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetUserData();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user,email already in use");
      } else {
        console.log("user creation encountered an error ", error);
      }
    }
  };

  return (
    <div className="sign-up-cotainer">
      <h2>Create new account</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleFormFieldChange}
          name="displayName"
          value={displayName}
          required
        />
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
        <FormInput
          label="Confirme Password"
          type="password"
          onChange={handleFormFieldChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <Button children="SIGN-UP" type="submit" />
      </form>
    </div>
  );
};

export default SignUpForm;
