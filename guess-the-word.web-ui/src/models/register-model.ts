export class RegisterModel {
  public firstName: string;
  public lastName: string;
  public email: string;
  public quizLanguage: string;
  public password: string;
  public repeatPassword: string;
  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.quizLanguage = "";
    this.password = "";
    this.repeatPassword = "";
  }
}
