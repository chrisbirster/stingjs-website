import { Route, Router } from "@solidjs/router";
import Home from "./pages/Home";
import Placeholder from "./pages/Placeholder";

export default function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="*all" component={Placeholder} />
    </Router>
  );
}
