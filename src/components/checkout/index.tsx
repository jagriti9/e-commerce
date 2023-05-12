import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Container, DetailsContainer, InputWrapper } from "./checkoutStyle";
import { checkoutAction } from "../../redux/slice/checkoutSlice";
import { cartActions } from "../../redux/slice/cartSlice";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../userCredential/style";
import { getCartData } from "../../redux/slice/selector";
import constants from "../constants.json";
type FormData = {
  userName: string;
  email: string;
  phoneNumber: string;
  address: string;
  paymentMethod: string;
};

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state: any) => state.user);
  const [formData, setFormData] = useState({
    userName: userDetails.userName,
    email: userDetails.userEmail,
    phoneNumber: "",
    address: "",
    paymentMethod: "credit card",
    errors: {} as FormData,
  });
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validate = (values: FormData) => {
    let errors = {} as FormData;
    setFormData({ ...formData, errors: errors });
    if (values.userName === "") {
      errors.userName = "Name is required";
    }
    if (values.email === "") {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (values.phoneNumber === "") {
      errors.phoneNumber = "Phone Number is required";
    } else if (values.phoneNumber.length !== 10) {
      errors.phoneNumber = "Phone number must be of 10 digits";
    }
    if (values.address === "") {
      errors.address = "Address is required";
    }
    if (values.paymentMethod === "") {
      errors.paymentMethod = "Payment Method is required";
    }
    const data = { ...formData, errors: errors };
    const flag = Object.values(errors).length !== 0;
    setFormData({ ...data });
    return flag;
  };
  const cartData = useSelector(getCartData);
  const placeOrder = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validate(formData)) {
      return;
    } else {
      dispatch(
        checkoutAction.addDetailsToCheckout({
          Name: formData.userName,
          Email: formData.email,
          PhoneNumber: formData.phoneNumber,
          Address: formData.address,
          PaymentMethod: formData.paymentMethod,
          OrderdOn: new Date().toDateString(),
        })
      );
      dispatch(checkoutAction.addToCheckout(cartData));
      dispatch(checkoutAction.addCheckoutToFirestore(userDetails.userName));
      dispatch(cartActions.clearCart());
      navigate("/order-placed");
    }
  };

  return (
    <Container>
      <DetailsContainer>
        <div>
          Lets buy your favourite things
          <h3>Place Your Order</h3>
        </div>
        <form onSubmit={(e) => placeOrder(e)}>
          <InputWrapper>
            <>
              <label htmlFor="Name">Name:</label>
              <FormInput
                id="Name"
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder={userDetails.userName}
              />
              <p>{formData.errors.userName}</p>
            </>
            <label htmlFor="Email">{constants.email}:</label>
            <>
              <FormInput
                id="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={userDetails.userEmail}
              />
              <p>{formData.errors.email}</p>
            </>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <>
              <FormInput
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <p>{formData.errors.phoneNumber}</p>
            </>
            <label htmlFor="shippingAddress">Shipping Address:</label>
            <>
              <FormInput
                id="shippingAddress"
                type="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              <p>{formData.errors.address}</p>
            </>
            <label htmlFor="paymentMethod">Payment Method:</label>
            <>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
              >
                <optgroup label="paymnet method">
                  <option value="credit_card">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="bank_transfer">Bank Transfer</option>
                </optgroup>
              </select>
              <p>{formData.errors.paymentMethod}</p>
            </>
          </InputWrapper>
          <button type="submit">Place order</button>
        </form>
      </DetailsContainer>
    </Container>
  );
};

export default Checkout;
