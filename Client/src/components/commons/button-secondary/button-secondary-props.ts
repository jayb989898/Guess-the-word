export class ButtonSecondaryProps {
  text: string;
  disabled: boolean;
  submit: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  constructor(
    text: string,
    disabled: boolean,
    submit: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  ) {
    this.text = text;
    this.disabled = disabled;
    this.submit = submit;
    this.onClick = onClick;
  }
}
