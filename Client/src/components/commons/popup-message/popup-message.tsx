import { useEffect } from "react";
import { PopupMessageProps } from "./popup-message-props";

export default function PopupMessage(props: PopupMessageProps) {
  useEffect(() => {
    if (props.show) {
      const timer = setTimeout(() => {
        props.onClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  });

  if (!props.show) {
    return null;
  }

  return (
    <div
      className={`fixed top-4 right-4 p-4 bg-blue-500 text-white rounded-lg shadow-lg transition-transform transform ${
        props.show ? "translate-y-0" : "translate-y-[-200%]"
      }`}
    >
      <h3 className="font-bold text-lg">{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}
