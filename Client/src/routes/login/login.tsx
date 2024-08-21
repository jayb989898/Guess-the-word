import "./login.scss";
import { useEffect, useRef, useState } from "react";
import { LoginModel } from "../../models/login-model";
import ButtonMain from "../../components/commons/button-main/button-main";
import { ButtonMainProps } from "../../components/commons/button-main/button-main-props";
import { LinkMainProps } from "../../components/commons/link-main/link-main-props";
import LinkMain from "../../components/commons/link-main/link-main";
import { TitleProps } from "../../components/commons/title/title-props";
import Title from "../../components/commons/title/title";
import Logo from "../../resources/logo.png";
import InputText from "../../components/commons/input-text/input-text";
import { InputTextProps } from "../../components/commons/input-text/input-text-props";
import { inputCheckService } from "../../services/input-check-service";

export default function Login() {
  const [formData, setFormData] = useState(new LoginModel());
  const [formIsValid, setFormIsValid] = useState(true);

  //variables to red borders of inputs
  const emailIsValid = useRef(true);
  const passwordIsValid = useRef(true);

  useEffect(() => {
    validateForm();
  });

  function setEmail(value: string): void {
    setFormData({ ...formData, email: value.trim() });
    emailIsValid.current = inputCheckService.checkEmail(value, true);
  }

  function setPassword(value: string): void {
    setFormData({ ...formData, password: value });
    passwordIsValid.current = inputCheckService.checkGeneric(value, true);
  }

  function validateForm(): void {
    const formIsValid: boolean =
      inputCheckService.checkEmail(formData.email) &&
      inputCheckService.checkGeneric(formData.password);
    setFormIsValid(formIsValid);
  }

  function login(): void {
    return;
  }

  return (
    <>
      <div
        id="container-login"
        className="sm:w-3/4 lg:w-1/2 xl:w-2/5 2xl:w-2/6"
      >
        <div className="div-card rounded overflow-hidden shadow-lg bg-white w-full">
          <div className="px-6 py-4 h-full">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-16 w-auto"
                src={Logo}
                alt="Your Company"
              />
              <Title {...new TitleProps("Sign in to your account")}></Title>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={() => login()}>
                <div>
                  <InputText
                    {...new InputTextProps(
                      formData.email,
                      "Repeat password",
                      emailIsValid.current,
                      "email",
                      "email",
                      (value: string) => setEmail(value),
                      "Not a valid email address."
                    )}
                  ></InputText>
                </div>
                <div className="mt-3">
                  <InputText
                    {...new InputTextProps(
                      formData.password,
                      "Password",
                      passwordIsValid.current,
                      "password",
                      "text",
                      (value: string) => setPassword(value),
                      undefined,
                      "Forgot password?"
                    )}
                  ></InputText>
                </div>
                <div className="mt-3">
                  <ButtonMain
                    {...new ButtonMainProps("Sign in", !formIsValid, true)}
                  ></ButtonMain>
                </div>
              </form>
              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?&nbsp;
                <LinkMain {...new LinkMainProps("Register")}></LinkMain>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
