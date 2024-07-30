import { UserCircleIcon } from "@heroicons/react/24/solid";
import ButtonMain from "../../components/commons/button-main/button-main";
import { ButtonMainProps } from "../../components/commons/button-main/button-main-props";
import { useEffect, useRef, useState } from "react";
import { RegisterModel } from "../../models/register-model";
import { InputCheckService } from "../../services/input-check-service";
import { InputTextProps } from "../../components/commons/input-text/input-text-props";
import InputText from "../../components/commons/input-text/input-text";
import Select from "../../components/commons/select/select";
import { SelectProps } from "../../components/commons/select/select-props";
import { SelectModel } from "../../components/commons/select/select-model";
import { FindIdInSelect } from "../../services/commons/filters-service";
import { AuthService } from "../../services/auth-service";
import { RegisterRequest } from "../../models/requests/register-reguest";
import DialogMain from "../../components/dialog/dialog-main";
import { DialogMainProps } from "../../components/dialog/dialog-main-props";
import { ResponseGenericModel } from "../../models/response-generic-model";
import LinkMain from "../../components/commons/link-main/link-main";
import { LinkMainProps } from "../../components/commons/link-main/link-main-props";

export default function Register() {
  const inputCheckService = new InputCheckService();
  const authService = new AuthService();
  const [formData, setFormData] = useState(new RegisterModel());
  const [formIsValid, setFormIsValid] = useState(false);
  const [openRegistrationOkDialog, setOpenRegistrationOkDialog] =
    useState(false);

  //variables to red borders of inputs
  const firstNameIsValid = useRef(true);
  const lastNameIsValid = useRef(true);
  const emailIsValid = useRef(true);
  const quizLanguageIsValid = useRef(true);
  const passwordIsValid = useRef(true);
  const repeatPasswordIsValid = useRef(true);

  const languages: Array<SelectModel> = [
    { id: 0, name: "Mexico" },
    { id: 1, name: "Italy" },
    { id: 2, name: "English" },
  ];

  useEffect(() => {
    validateForm();
  });

  function setFirstName(value: string): void {
    setFormData({ ...formData, firstName: value });
    firstNameIsValid.current = inputCheckService.checkGeneric(value, true);
  }

  function setLastName(value: string): void {
    setFormData({ ...formData, lastName: value });
    lastNameIsValid.current = inputCheckService.checkGeneric(value, true);
  }

  function setEmail(value: string): void {
    setFormData({ ...formData, email: value });
    emailIsValid.current = inputCheckService.checkEmail(value, true);
  }

  function setQuizLanguage(value: string): void {
    const selectModel = FindIdInSelect(value, languages);
    setFormData({
      ...formData,
      quizLanguage: selectModel,
    });
    quizLanguageIsValid.current = inputCheckService.checkSelect(
      selectModel,
      true
    );
  }

  function setPassword(value: string): void {
    setFormData({ ...formData, password: value });
    passwordIsValid.current = inputCheckService.checkPassword(value, true);

    if (formData.repeatPassword.length > 0) {
      repeatPasswordIsValid.current = inputCheckService.checkCompare(
        value,
        formData.repeatPassword,
        true
      );
    }
  }

  function setRepeatPassword(value: string): void {
    setFormData({ ...formData, repeatPassword: value });
    repeatPasswordIsValid.current = inputCheckService.checkCompare(
      value,
      formData.password,
      true
    );
  }

  function validateForm(): void {
    const formIsValid: boolean =
      inputCheckService.checkGeneric(formData.firstName) &&
      inputCheckService.checkGeneric(formData.lastName) &&
      inputCheckService.checkEmail(formData.email) &&
      inputCheckService.checkSelect(formData.quizLanguage) &&
      inputCheckService.checkPassword(formData.password) &&
      inputCheckService.checkCompare(
        formData.repeatPassword,
        formData.password
      );
    setFormIsValid(formIsValid);
  }

  function register(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    authService
      .register(new RegisterRequest(formData))
      .then((res: ResponseGenericModel) => {
        if (res.isOk) {
          setOpenRegistrationOkDialog(true);
        } else {
        }
      });
  }

  function closeModal(): void {
    setOpenRegistrationOkDialog(false);
  }

  return (
    <>
      <div
        id="container-register"
        className="sm:w-3/4 lg:w-1/2 xl:w-2/5 2xl:w-2/6 mt-10 mb-10"
      >
        <div className="div-card rounded overflow-hidden shadow-lg bg-white w-full">
          <div className="px-6 py-4 h-full">
            <form onSubmit={(event) => register(event)}>
              <div>
                <div className="pb-2">
                  <h1 className="text-base font-semibold leading-7 text-gray-900">
                    Register
                  </h1>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Submit form and enjoy the game
                  </p>
                  <hr className="border-gray-400 mt-2"></hr>
                  <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <InputText
                        {...new InputTextProps(
                          formData.firstName,
                          "First name",
                          firstNameIsValid.current,
                          "first-name",
                          "text",
                          (value: string) => setFirstName(value)
                        )}
                      ></InputText>
                    </div>
                    <div className="sm:col-span-3">
                      <InputText
                        {...new InputTextProps(
                          formData.lastName,
                          "Last name",
                          lastNameIsValid.current,
                          "last-name",
                          "text",
                          (value: string) => setLastName(value)
                        )}
                      ></InputText>
                    </div>
                    <div className="sm:col-span-4">
                      <InputText
                        {...new InputTextProps(
                          formData.email,
                          "Email address",
                          emailIsValid.current,
                          "email",
                          "email",
                          (value: string) => setEmail(value),
                          "Not a valid email address."
                        )}
                      ></InputText>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Photo
                      </label>
                      <div className="mt-2 flex items-center gap-x-3">
                        <UserCircleIcon
                          className="h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <button
                          type="button"
                          className="rounded-md bg-white px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                          Choose file
                        </button>
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <Select
                        {...new SelectProps(
                          formData.quizLanguage,
                          "Quiz language",
                          quizLanguageIsValid.current,
                          languages,
                          "quizLanguage",
                          (value: string) => setQuizLanguage(value)
                        )}
                      ></Select>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <InputText
                        {...new InputTextProps(
                          formData.password,
                          "Password",
                          passwordIsValid.current,
                          "password",
                          "password",
                          (value: string) => setPassword(value),
                          "Password not strong enough."
                        )}
                      ></InputText>
                    </div>
                    <div className="sm:col-span-4">
                      <InputText
                        {...new InputTextProps(
                          formData.repeatPassword,
                          "Repeat password",
                          repeatPasswordIsValid.current,
                          "password-repeat",
                          "password",
                          (value: string) => setRepeatPassword(value),
                          "Passwords do not match."
                        )}
                      ></InputText>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-end gap-x-6">
                <ButtonMain
                  {...new ButtonMainProps("Register", !formIsValid, true)}
                ></ButtonMain>
              </div>
            </form>
            <DialogMain
              {...new DialogMainProps(
                openRegistrationOkDialog,
                "Registrazione avvenuta con successo!",
                (
                  <p>
                    Conferma la mail di registrazione e vai alla{" "}
                    <LinkMain
                      {...new LinkMainProps("login", "/login")}
                    ></LinkMain>
                    !
                  </p>
                ),
                false,
                null,
                null,
                () => closeModal()
              )}
            ></DialogMain>
          </div>
        </div>
      </div>
    </>
  );
}
