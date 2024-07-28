import axios, { AxiosError, AxiosResponse } from "axios";
import { RegisterRequest } from "../models/requests/register-reguest";

export class AuthService {
  private apiAuth: string = "https://localhost:7068/api/auth/";

  public register(registerRequest: RegisterRequest) {
    axios
      .post(this.apiAuth + "Register", registerRequest)
      .then((response: AxiosResponse) => {
        // Handle data
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  }
}
