export class PopupMessageProps {
  show: boolean;
  title: string;
  text: string;
  onClose: () => void;
  constructor(show: boolean, title: string, text: string, onClose: () => void) {
    this.show = show;
    this.title = title;
    this.text = text;
    this.onClose = onClose;
  }
}
