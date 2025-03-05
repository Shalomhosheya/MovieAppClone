import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorerPage from "../pages/ExplorerPage";
import DetailPage from "../pages/DetailPage";
import SearchPage from "../pages/SearchPage";

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
        path: ":explorer",
        element: <ExplorerPage />,
      },
      {
        path: ":explorer/:id",
        element: <DetailPage />,
      },
      {
        path: "Search",
        element: <SearchPage />,
      }
    ],
  },
]);
export default router;