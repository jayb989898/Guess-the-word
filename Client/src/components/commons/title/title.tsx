import { TitleProps } from "./title-props";

export default function Title(props: TitleProps) {
  return (
    <>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {props.text}
      </h2>
    </>
  );
}
