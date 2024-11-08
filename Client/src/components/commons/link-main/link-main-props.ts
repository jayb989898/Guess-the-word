export class LinkMainProps {
  text: string;
  href: string;
  constructor(text: string, href: string) {
    this.text = text;
    this.href = href === undefined ? "#" : href;
  }
}
