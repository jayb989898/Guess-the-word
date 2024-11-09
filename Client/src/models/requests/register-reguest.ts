import { RegisterModel } from "../register-model";
import { SelectItem } from "../select-model";

export class RegisterRequest {
  public firstName: string;
  public lastName: string;
  public email: string;
  public quizLanguage: SelectItem | null;
  public password: string;
  constructor(registerModel: RegisterModel) {
    this.firstName = registerModel.firstName;
    this.lastName = registerModel.lastName;
    this.email = registerModel.email;
    this.quizLanguage = registerModel.quizLanguage;
    this.password = registerModel.password;
  }
}
