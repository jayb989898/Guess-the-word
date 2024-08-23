import { useEffect, useState } from "react";
import { PopupMessageProps } from "./popup-message-props";
import { popupService } from "../../../services/popup-service";

export default function PopupMessage() {
  const [propsState, setPropsState] = useState<PopupMessageProps>(
    new PopupMessageProps()
  );

  useEffect(() => {
    popupService.popup$.subscribe(setPropsState);

    const timeoutId = setTimeout(() => {
      close();
    }, 5000); // Static 5 seconds duration
    return () => clearTimeout(timeoutId);
  });

  function close(): void {
    popupService.close();
  }

  if (!propsState.show) {
    return null;
  }

  return (
    <>
      <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl p-4 flex items-center space-x-4 max-w-sm z-50">
        <div className="bg-red-500 p-2 rounded-full">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 22.586L14.293 12.879a1 1 0 0 0-1.414 1.414L22.586 24l-9.707 9.707a1 1 0 0 0 1.414 1.414L24 25.414l9.707 9.707a1 1 0 0 0 1.414-1.414L25.414 24l9.707-9.707a1 1 0 0 0-1.414-1.414L24 22.586z"
              fill="white"
            />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-gray-800">{propsState.title}</p>
          <p className="text-gray-600">{propsState.text}</p>
        </div>
        <button
          onClick={() => close()}
          className="ml-auto bg-gray-200 hover:bg-gray-300 rounded-full p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
