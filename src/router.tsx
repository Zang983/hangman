import { createBrowserRouter } from "react-router-dom";
import Index from "./pages";
import Rules from "./pages/rules";
import Config from "./pages/config";
import Game from "./pages/game";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />
    },
    {
        path: "/rules",
        element: <Rules />
    },
    {
        path: "/config",
        element: <Config />
    },
    {
        path: "/game",
        element: <Game />
    }
])

export default router
