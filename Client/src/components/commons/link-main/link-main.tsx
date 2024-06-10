import { LinkMainProps } from "./link-main-props";

export default function LinkMain(props: LinkMainProps) {
  return (
    <>
      <a
        href={props.href}
        className="font-semibold hover:text-fuchsia-600 text-fuchsia-500"
      >
        {props.text}
      </a>
    </>
  );
}
