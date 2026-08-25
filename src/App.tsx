import { createRouter } from "@solidjs/router";
import Home from "./pages/Home";
import Placeholder from "./pages/Placeholder";

const SiteRouter = createRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/*all", component: Placeholder },
  ],
});

export default function App() {
  return <SiteRouter />;
}
