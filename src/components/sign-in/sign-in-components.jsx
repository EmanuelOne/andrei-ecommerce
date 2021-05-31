import React, { Component } from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import Button from "../custom-btn/custom-btn";
import FormInput from "../form-input/form-input-components";
import "./sign-in-components.scss";
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ ...this.state, [name]: value });
    console.log(value, name);
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In with your email</span>
        <form
          onSubmit={this.handleSubmit}
          action="
            ">
          <FormInput
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label={"email"}
          />
          <FormInput
            type="password"
            value={this.state.password}
            name="password"
            handleChange={this.handleChange}
            required
            label="password"
            id="password"
          />
          <div className="btn">
            <Button type="submit" value="Submit form" children="Sign In" />
            <Button
              isGoogleSignIn={true}
              onClick={signInWithGoogle}
              children="Sign In With Google"
            />
          </div>
        </form>
      </div>
    );
  }
}
