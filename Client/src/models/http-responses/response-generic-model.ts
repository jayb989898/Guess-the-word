import { AxiosError, AxiosResponse, HttpStatusCode } from "axios";

export class ResponseGenericModel {
  public isOk: boolean = false;
  public httpCode: HttpStatusCode = HttpStatusCode.InternalServerError;
  public messageError: string = "";
  constructor(response: AxiosResponse | null, error: AxiosError | null) {
    if (response !== null) {
      this.isOk = true;
      this.httpCode = response.status;
    } else if (error !== null) {
      this.isOk = false;
      this.httpCode =
        error.status !== null && error.status !== undefined
          ? error.status
          : HttpStatusCode.InternalServerError;
      this.messageError = error.response?.data as string;
    }
  }
}