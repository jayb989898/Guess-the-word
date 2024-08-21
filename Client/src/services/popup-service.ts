import { BehaviorSubject } from "rxjs";
import { PopupMessageProps } from "../components/commons/popup-message/popup-message-props";
import { ResponseGenericModel } from "../models/response-generic-model";
import { HttpStatusCode } from "axios";

export class PopupService {
  private popupSubject = new BehaviorSubject<PopupMessageProps>(
    new PopupMessageProps()
  );

  // Observable for the visibility state
  popup$ = this.popupSubject.asObservable();

  open(props: PopupMessageProps) {
    this.popupSubject.next(props);
  }

  close() {
    this.popupSubject.next(new PopupMessageProps());
  }

  showErrorHttp(httpResponse: ResponseGenericModel) {
    if (!httpResponse.isOk) {
      let title: string = "Something went wrong!";
      let message: string = "Please try again or send a mail to us.";
      switch (httpResponse.httpCode) {
        case HttpStatusCode.InternalServerError: {
          message = httpResponse.messageError;
          break;
        }
        default: {
          break;
        }
      }

      this.open(new PopupMessageProps(true, title, message));
    }
  }
}

export const popupService = new PopupService();
