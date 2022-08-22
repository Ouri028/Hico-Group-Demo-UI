import { Switch, Route } from "react-router-dom";
import routes from "./routes";

const getRoutes = (allRoutes) =>
  allRoutes.map((route) => {
    if (route.route) {
      return (
        <Route
          exact
          path={route.route}
          component={route.component}
          key={route.key}
        />
      );
    }

    return null;
  });

function App() {
  return <Switch>{getRoutes(routes)}</Switch>;
}
export default App;
