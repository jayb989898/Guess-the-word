import ButtonMain from "../button-main/button-main";
import { ButtonMainProps } from "../button-main/button-main-props";
import ButtonSecondary from "../button-secondary/button-secondary";
import { ButtonSecondaryProps } from "../button-secondary/button-secondary-props";
import { DialogMainProps } from "./dialog-main-props";

export default function DialogMain(props: DialogMainProps) {
  function handleOutsideClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target === e.currentTarget) {
      props.onClose(false);
    }
  }

  if (!props.isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50"
        onClick={(event) => handleOutsideClick(event)}
      >
        <div className="bg-white rounded-lg shadow-lg max-w-md w-full pt-3 px-6 pb-6 relative">
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-4">{props.title}</h2>
            </div>
            <div>
              {!props.enableActionButtons ? (
                <button
                  className="text-gray-400 hover:text-gray-500 text-2xl absolute right-3 top-1"
                  onClick={() => props.onClose(false)}
                >
                  <div className="mt-0">&times;</div>
                </button>
              ) : null}
            </div>
          </div>
          <div>
            {props.text}
            {props.enableActionButtons ? (
              <div className="flex justify-end space-x-2 mt-6">
                <ButtonSecondary
                  {...new ButtonSecondaryProps("Cancel", false, true, () =>
                    props.onClose(false)
                  )}
                ></ButtonSecondary>
                <ButtonMain
                  {...new ButtonMainProps("Confirm", false, true, () =>
                    props.onClose(true)
                  )}
                ></ButtonMain>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
