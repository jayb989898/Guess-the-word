import { SelectModel } from "../components/commons/select/select-model";

export class RegisterModel {
  public firstName: string;
  public lastName: string;
  public email: string;
  public quizLanguage: SelectModel | null;
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
