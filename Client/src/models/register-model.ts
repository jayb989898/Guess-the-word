import { SelectItem } from "./select-model";

export class RegisterModel {
  public firstName: string;
  public lastName: string;
  public email: string;
  public quizLanguage: SelectItem | null;
  public password: string;
  public repeatPassword: string;
  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.quizLanguage = null;
    this.password = "";
    this.repeatPassword = "";
  }
}
