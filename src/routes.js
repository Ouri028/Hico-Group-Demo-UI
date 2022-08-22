import Dashboard from "./views/Dashboard";
import Login from "./views/Login";

const routes = [
  {
    name: "Dashboard",
    route: "/",
    component: Dashboard,
    key: "dashboard",
  },
  {
    name: "Login",
    route: "/login",
    component: Login,
    key: "login",
  },
];

export default routes;
