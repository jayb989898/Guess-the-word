import { useEffect, useState } from "react";
import { PopupMessageProps } from "./popup-message-props";
import { popupService } from "./popup-service";

export default function PopupMessage() {
  const [propsState, setPropsState] = useState<PopupMessageProps>(
    new PopupMessageProps()
  );

  useEffect(() => {
    const subscription = popupService.popup$.subscribe(setPropsState);

    const timeoutId = setTimeout(() => {
      close();
    }, 5000); // Static 5 seconds duration
    return () => clearTimeout(timeoutId);
  });

  function open(props: PopupMessageProps): void {
    setPropsState(new PopupMessageProps());
  }

  function close(): void {
    popupService.close();
    // setPropsState(new PopupMessageProps());
  }

  if (!propsState.show) {
    return null;
  }

  return (
    <div
      className={`fixed top-4 right-4 p-4 bg-blue-500 text-white rounded-lg shadow-lg transition-transform transform ${"translate-y-0"}`}
    >
      <h3 className="font-bold text-lg">{propsState.title}</h3>
      <p>{propsState.text}</p>
      <button onClick={() => close()}>Close</button>
    </div>
  );
}
