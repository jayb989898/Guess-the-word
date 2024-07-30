import { AxiosError, AxiosResponse } from "axios";

export class ResponseGenericModel {
  public isOk: boolean;
  public messageError: string | null;
  constructor(response: AxiosResponse | null, error: AxiosError | null) {
    if (response !== null) {
      this.isOk = true;
      this.messageError = null;
    } else if (error !== null) {
      this.isOk = false;
      this.messageError = error.response?.data as string;
    } else {
      this.isOk = false;
      this.messageError = null;
    }
  }
}
