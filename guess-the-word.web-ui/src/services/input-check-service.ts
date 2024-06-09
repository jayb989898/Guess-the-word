const emailReg: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; // eslint-disable-line
const passwordReg: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g; // eslint-disable-line

export class InputCheckService {
  public checkGeneric(value: string, usedInUI: boolean = false): boolean {
    if (usedInUI && value.length === 0) {
      return true;
    }

    const isValid = value.length > 0 && value.trim() !== "";
    return isValid;
  }

  public checkEmail(value: string, usedInUI: boolean = false): boolean {
    if (usedInUI && value.length === 0) {
      return true;
    }

    const isValid = value.length > 0 && emailReg.test(value);
    return isValid;
  }

  public checkPassword(value: string, usedInUI: boolean = false): boolean {
    if (usedInUI && value.length === 0) {
      return true;
    }

    const isValid = value.length > 0 && passwordReg.test(value);
    return isValid;
  }

  public checkCompare(
    value: string,
    valueToCompare: string,
    usedInUI: boolean = false
  ): boolean {
    if (usedInUI && value.length === 0) {
      return true;
    }

    const isValid = value.length > 0 && value === valueToCompare;
    return isValid;
  }
}
