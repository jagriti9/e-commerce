import { useState, CSSProperties } from "react";
import { auth, database } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  Container,
  FormContainer,
  FormInput,
  Button,
  FormFooter,
  InputWrapper,
} from "./style";
import { NavLink, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { MoonLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import { notify } from "../helper/helper";
import constants from "../constants.json";
import { type } from "os";
const override: CSSProperties = {
  margin: "60px auto",
};
type FormData = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const SignUp = (): JSX.Element => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {} as FormData,
  });
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    console.log(typeof name, typeof value);
    setFormData({ ...formData, [name]: value });
  };
  const validate = (values: FormData) => {
    let errors = {} as FormData;
    if (!values.userName) {
      errors.userName = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    } else if (
      !/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/.test(values.password)
    ) {
      errors.password =
        "password doesn't match the format of atleast 1 number,1lower case ,1upper case and 6 digit long";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    setFormData({ ...formData, errors: errors });
  };
  const signUp = async (e: { preventDefault: () => void }) => {
    // setLoading(true);
    e.preventDefault();
    validate(formData);
    if (Object.values(formData.errors).length !== 0) {
      return;
    } else {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      ).then((credential) => {
        notify("Account created successfully");
        const user = credential.user;
        updateProfile(user, { displayName: formData.userName }).then(() => {
          setDoc(doc(database, "users", formData.userName), {
            userId: formData.userName,
            userEmail: formData.email,
          });
        });
        navigate("/sign-in");
      });
      notify("Email already exist");
    }
    // setLoading(false);
  };

  return (
    <>
      <ToastContainer />
      <Container>
        {loading ? (
          <MoonLoader
            color={"rgb(54, 85, 224)"}
            loading={loading}
            cssOverride={override}
            size={100}
          />
        ) : (
          <FormContainer onSubmit={(e) => signUp(e)}>
            <h1>Let's create your Account</h1>
            <InputWrapper>
              <label htmlFor="userName">User Name</label>
              <FormInput
                id="userName"
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
              />
              <p>{formData.errors.userName}</p>
              <label htmlFor="email">{constants.email}</label>
              <FormInput
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <p>{formData.errors.email}</p>
              <label htmlFor="password">{constants.password}</label>
              <FormInput
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <p>{formData.errors.password}</p>
              <label htmlFor="confirmPassword">
                {constants.confirmPassword}
              </label>
              <FormInput
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <p>{formData.errors.confirmPassword}</p>
              <Button type="submit">{constants.signUp}</Button>
            </InputWrapper>
            <FormFooter>
              Aready have an account ?
              <NavLink to="/sign-in">{constants.signIn}</NavLink>
            </FormFooter>
          </FormContainer>
        )}
      </Container>
    </>
  );
};

export default SignUp;
