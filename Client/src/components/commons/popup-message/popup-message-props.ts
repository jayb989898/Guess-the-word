export class PopupMessageProps {
  show: boolean;
  title: string;
  text: string;
  constructor(show: boolean = false, title: string = "", text: string = "") {
    this.show = show;
    this.title = title;
    this.text = text;
  }
}
