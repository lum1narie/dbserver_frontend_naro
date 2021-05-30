import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import Axios from "./pages/Axios.vue";
import Login from "./pages/Login.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      isPublic: true,
    },
  },
  {
    path: "/axios",
    name: "axios",
    component: Axios,
    meta: {
      isPublic: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      isPublic: true,
    },
  },
  { path: "/:path(.*)", component: NotFound },
];
