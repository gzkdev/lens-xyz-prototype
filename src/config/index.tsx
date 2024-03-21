import { createBrowserRouter } from "react-router-dom";
import { Root } from "@/pages/root";
import { Explore } from "@/pages/explore";
import { Handles } from "@/pages/handles";
import { Mint } from "@/pages/mint";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Handles />,
      },
      {
        path: "mint",
        element: <Mint />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "handles",
        element: <Handles />,
      },
    ],
  },
]);
