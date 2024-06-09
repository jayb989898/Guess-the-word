import "./login.scss";
import { useEffect, useState } from "react";
import { LoginModel } from "../../models/login-model";
import ButtonMain from "../../components/commons/button-main/button-main";
import { ButtonMainProps } from "../../components/commons/button-main/button-main-props";
import { LinkMainProps } from "../../components/commons/link-main/link-main-props";
import LinkMain from "../../components/commons/link-main/link-main";
import { TitleProps } from "../../components/commons/title/title-props";
import Title from "../../components/commons/title/title";
import Logo from "../../resources/logo.png";
export default function Login() {
  const [formData, setFormData] = useState(new LoginModel());
  const [mailIsValid, setMailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const emailReg: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; // eslint-disable-line

  useEffect(() => {
    validateForm();
  });

  function setEmail(value: string): void {
    setFormData({ ...formData, email: value });
  }

  function setPassword(value: string): void {
    setFormData({ ...formData, password: value });
  }

  function validateForm(): void {
    const mailIsValid: boolean = emailReg.test(formData.email);
    setMailIsValid(mailIsValid);
    const passwordIsValid: boolean = formData.password.length > 0;
    setPasswordIsValid(passwordIsValid);
  }

  function login(): void {
    return;
  }

  return (
    <>
      <div id="container-quiz">
        <div className="grid h-screen place-items-center">
          <div className="div-card rounded overflow-hidden shadow-lg bg-white sm:w-3/4 lg:w-1/2 xl:w-2/5 2xl:w-2/6">
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className={`${
                          !mailIsValid && formData.email.length > 0
                            ? "ring-red-600"
                            : "ring-gray-300"
                        } block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6 focus:border-fuchsia-600 focus:ring-inset focus:ring-fuchsia-600 focus:outline-none`}
                        value={formData.email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                    <p className="text-red-500 mt-1">
                      {!mailIsValid && formData.email.length > 0
                        ? "Not a valid email address."
                        : ""}
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div className="text-sm">
                        <LinkMain
                          {...new LinkMainProps("Forgot password?")}
                        ></LinkMain>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:border-fuchsia-600 focus:ring-inset focus:ring-fuchsia-600 focus:outline-none"
                        value={formData.password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <ButtonMain
                      {...new ButtonMainProps(
                        "Sign in",
                        !(mailIsValid && passwordIsValid),
                        true
                      )}
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
      </div>
    </>
  );
}
