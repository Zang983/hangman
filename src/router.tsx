import { createBrowserRouter } from "react-router-dom";
import Index from "./pages";
import Rules from "./pages/rules";
import Config from "./pages/config";
import Game from "./pages/game";
import Layout from "./pages/layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><Index /></Layout>
    },
    {
        path: "/rules",
        element: <Layout><Rules /></Layout>
    },
    {
        path: "/config",
        element: <Layout><Config /></Layout>
    },
    {
        path: "/game",
        element: <Layout><Game /></Layout>
    }
])

export default router
