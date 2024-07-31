import { ReactElement } from "react";

export class DialogMainProps {
  isOpen: boolean;
  title: string;
  text: ReactElement;
  enableActionButtons: boolean;
  width: string | null;
  height: string | null;
  onClose: (value?: boolean) => void;
  constructor(
    isOpen: boolean,
    title: string,
    text: ReactElement,
    enableActionButtons: boolean,
    width: string | null,
    height: string | null,
    onClose: (value?: boolean) => void
  ) {
    this.isOpen = isOpen;
    this.title = title;
    this.text = text;
    this.enableActionButtons = enableActionButtons;
    this.width = width;
    this.height = height;
    this.onClose = onClose;
  }
}
