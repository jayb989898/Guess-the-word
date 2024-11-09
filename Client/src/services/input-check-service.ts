import { SelectItem, SelectModel } from "../models/select-model";

const emailReg: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/; // eslint-disable-line
const passwordReg: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // eslint-disable-line

class InputCheckService {
  public checkGeneric(
    value: string,
    ignoreInitialState: boolean = false
  ): boolean {
    if (ignoreInitialState && value.length === 0) {
      return true;
    }

    const isValid = value.length > 0 && value.trim() !== "";
    return isValid;
  }

  public checkSelect(
    value: SelectItem | null,
    ignoreInitialState: boolean = false
  ): boolean {
    if (ignoreInitialState && value === null) {
      return true;
    }

    const isValid = value !== null;
    return isValid;
  }

  public checkEmail(
    value: string,
    ignoreInitialState: boolean = false
  ): boolean {
    if (ignoreInitialState && value.length === 0) {
      return true;
    }

    const isValid = value.length > 0 && emailReg.test(value);
    return isValid;
  }

  public checkPassword(
    value: string,
    ignoreInitialState: boolean = false
  ): boolean {
    if (ignoreInitialState && value.length === 0) {
      return true;
    }

    const isValid = value.length > 0 && passwordReg.test(value);
    return isValid;
  }

  public checkCompare(
    value: string,
    valueToCompare: string,
    ignoreInitialState: boolean = false
  ): boolean {
    if (ignoreInitialState && value.length === 0) {
      return true;
    }

    const isValid = value.length > 0 && value === valueToCompare;
    return isValid;
  }
}

export const inputCheckService = new InputCheckService();
