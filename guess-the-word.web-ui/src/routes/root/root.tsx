import { Outlet, Link } from "react-router-dom";
import "../../index.scss";
import "./root.scss";

export default function Root() {
  return (
    <>
      <div id="container-root" className="h-screen">
        <div id="sidebar">
          <Outlet />
        </div>
      </div>
    </>
  );
}
