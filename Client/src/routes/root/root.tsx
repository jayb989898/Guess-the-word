import { Outlet, Link } from "react-router-dom";
import "../../index.scss";
import "./root.scss";

export default function Root() {
  return (
    <>
      <div id="container-root" className="min-h-screen grid place-items-center">
        <Outlet />
      </div>
    </>
  );
}
