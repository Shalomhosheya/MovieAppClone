import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorerPage from "../pages/ExplorerPage";
import DetailPage from "../pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/explorer",
        element: <ExplorerPage />,
      },
      {
        path: "/detail",
        element: <DetailPage />,
      },
    ],
  },
]);
export default router;