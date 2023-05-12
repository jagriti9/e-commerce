import { signInWithEmailAndPassword } from "firebase/auth";
import { CSSProperties, useState, FormEvent } from "react";
import { auth } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Container,
  FormContainer,
  FormInput,
  Button,
  FormFooter,
  InputWrapper,
} from "./style";
import { useDispatch } from "react-redux";
import { MoonLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import { notify, updateUserData } from "../helper/helper";
import { userAction } from "../../redux/slice/userSlice";
import constants from "../constants.json";

const override: CSSProperties = {
  margin: "60px auto",
};
type FormData = {
  email: string;
  password: string;
};
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errors: {} as FormData,
  });
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validate = (values: FormData) => {
    let errors = {} as FormData;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    setFormData({ ...formData, errors: errors });
  };
  const signIn = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    validate(formData);

    if (Object.values(formData.errors).length !== 0) {
      return;
    } else {
      await signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((credentials) => {
          dispatch(
            userAction.setUserActive({
              name: credentials.user.displayName,
              email: credentials.user.email,
            })
          );
          updateUserData(credentials.user.displayName!, dispatch);
          notify("succesfully Logged In");
          navigate("/");
        })
        .catch(() => {
          notify("invalid credentials");
        });
    }
    setLoading(false);
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
          <FormContainer onSubmit={(e) => signIn(e)}>
            <h1>Log In to your Account</h1>
            <InputWrapper>
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
              <Button type="submit">Log In</Button>
            </InputWrapper>
            <FormFooter>
              Don't have an account ?{" "}
              <NavLink to="/sign-up">{constants.signIn}</NavLink>
            </FormFooter>
          </FormContainer>
        )}
      </Container>
    </>
  );
};

export default SignIn;
