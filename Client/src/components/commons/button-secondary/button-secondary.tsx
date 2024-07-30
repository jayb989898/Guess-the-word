import { ButtonSecondaryProps } from "./button-secondary-props";

export default function ButtonSecondary(props: ButtonSecondaryProps) {
  return (
    <>
      <button
        type={`${props.submit ? "submit" : "button"}`}
        onClick={props.onClick}
        disabled={props.disabled}
        className={`${
          props.disabled
            ? "bg-gray-300 cursor-not-allowed"
            : "hover:bg-gray-700 bg-gray-500"
        } flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
      >
        {props.text}
      </button>
    </>
  );
}
