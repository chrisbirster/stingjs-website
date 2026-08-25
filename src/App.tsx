import { createRouter, defineRoutes } from "@solidjs/router";
import Home from "./pages/Home";
import Placeholder from "./pages/Placeholder";

const routes = defineRoutes([
  { path: "/", component: Home },
  { path: "/*all", component: Placeholder },
]);

const SiteRouter = createRouter({ routes });

export default function App() {
  return <SiteRouter />;
}
