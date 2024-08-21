// src/services/ComponentVisibilityService.ts
import { BehaviorSubject } from "rxjs";
import { PopupMessageProps } from "./popup-message-props";

class PopupService {
  private popupSubject = new BehaviorSubject<PopupMessageProps>(
    new PopupMessageProps()
  );

  // Observable for the visibility state
  popup$ = this.popupSubject.asObservable();

  // Method to show the component
  open(props: PopupMessageProps) {
    this.popupSubject.next(props);
  }

  // Method to hide the component
  close() {
    this.popupSubject.next(new PopupMessageProps());
  }
}

export const popupService = new PopupService();
