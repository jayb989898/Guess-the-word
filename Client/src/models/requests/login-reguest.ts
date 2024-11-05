import { LoginModel } from "../login-model";

export class LoginRequest {
  public email: string;
  public password: string;
  constructor(loginRequest: LoginModel) {
    this.email = loginRequest.email;
    this.password = loginRequest.password;
  }
}
