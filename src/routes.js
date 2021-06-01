import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import Axios from "./pages/Axios.vue";
import Login from "./pages/Login.vue";
import City from "./pages/City.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { isPublic: true },
  },
  {
    path: "/axios",
    name: "axios",
    component: Axios,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { isPublic: true },
  },
  {
    path: "/city/:cityName",
    name: "city",
    component: City,
    props: true,
  },
  {
    path: "/:path(.*)",
    component: NotFound,
    meta: { isPublic: true },
  },
];
