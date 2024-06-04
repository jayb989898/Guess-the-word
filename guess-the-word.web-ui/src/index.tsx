import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root/root";
import ErrorPage from "./routes/error-page";
import Quiz from "./routes/quiz/quiz";
import LostQuiz from "./routes/lost-quiz/lost-quiz";
import WinQuiz from "./routes/win-quiz/win-quiz";
import Login from "./routes/login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "quiz",
        element: <Quiz />,
      },
      {
        path: "lost-quiz",
        element: <LostQuiz />,
      },
      {
        path: "win-quiz",
        element: <WinQuiz />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
