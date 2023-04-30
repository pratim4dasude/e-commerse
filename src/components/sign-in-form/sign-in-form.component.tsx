import { useState,FormEvent,ChangeEvent } from "react";

import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

// import {UserContext} from '../../contexts/user.context'

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};
//

const SignINForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //   const {setCurrentUser} = useContext(UserContext);

  //   console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
    // await signInWithGooglePopup();
    // setCurrentUser(user);
    // createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // try {
    //   const { user } = await signInAuthUserWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   //   setCurrentUser(user);

    //   resetFormFields();
    // } catch (error) {
    //   switch (error.code) {
    //     case "auth/wrong-password":
    //       alert("Incorrect Password");
    //       break;
    //     case "auth/user-not-found":
    //       alert("Incorrect USER ID");
    //       break;
    //     default:
    //       console.log(error);
    //   }
    // }
    try {
      dispatch(emailSignInStart(email, password));
      // await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account</h2>
      <span>Sign IN </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign IN</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign IN
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignINForm;
