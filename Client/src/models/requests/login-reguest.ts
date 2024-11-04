import { SelectModel } from "../http-responses/select-model";
import { LoginModel } from "../login-model";
import { RegisterModel } from "../register-model";

export class LoginRequest {
  public email: string;
  public password: string;
  constructor(loginRequest: LoginModel) {
    this.email = loginRequest.email;
    this.password = loginRequest.password;
  }
}
