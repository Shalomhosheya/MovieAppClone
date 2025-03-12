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
        path: "explore/:mediaType", // Matches /explore/movie or /explore/tv
        element: <ExplorerPage />,
      },
      {
        path: ":mediaType", // Matches /movie or /tv
        element: <ExplorerPage />,
      },
      {
        path: ":mediaType/:id", // Matches /movie/123 or /tv/456
        element: <DetailPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;