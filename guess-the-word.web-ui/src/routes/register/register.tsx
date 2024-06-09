import { UserCircleIcon } from "@heroicons/react/24/solid";
import ButtonMain from "../../components/commons/button-main/button-main";
import { ButtonMainProps } from "../../components/commons/button-main/button-main-props";

export default function Register() {
  return (
    <>
      <div id="container-quiz">
        <div className="grid h-screen place-items-center">
          <div className="div-card rounded overflow-hidden shadow-lg bg-white w-4/5 sm:w-3/4 lg:w-1/2 xl:w-2/5 2xl:w-2/6">
            <div className="px-6 py-4 h-full">
              <form>
                <div>
                  <div className="pb-2">
                    <h1 className="text-base font-semibold leading-7 text-gray-900">
                      Register
                    </h1>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      Submit form and enjoy the game
                    </p>
                    <hr className="border-gray-400 mt-2"></hr>
                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          First name
                        </label>
                        <div className="mt-4">
                          <input
                            type="text"
                            name="first-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:border-fuchsia-600 focus:ring-inset focus:ring-fuchsia-600 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Last name
                        </label>
                        <div className="mt-4">
                          <input
                            type="text"
                            name="last-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:border-fuchsia-600 focus:ring-inset focus:ring-fuchsia-600 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-4">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Email address
                        </label>
                        <div className="mt-4">
                          <input
                            name="email"
                            type="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:border-fuchsia-600 focus:ring-inset focus:ring-fuchsia-600 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                      <div className="col-span-full">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Photo
                        </label>
                        <div className="mt-4 flex items-center gap-x-3">
                          <UserCircleIcon
                            className="h-12 w-12 text-gray-300"
                            aria-hidden="true"
                          />
                          <button
                            type="button"
                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            Choose file
                          </button>
                        </div>
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Quiz language
                        </label>
                        <div className="mt-4">
                          <select
                            name="language"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-end gap-x-6">
                  {/* <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </button> */}
                  <ButtonMain
                    {...new ButtonMainProps("Register", false, true)}
                  ></ButtonMain>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
