import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import Login from "./pages/Login.vue";
import City from "./pages/City.vue";
import Countries from "./pages/Countries.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { isPublic: true },
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
    path: "/countries",
    name: "countries",
    component: Countries,
  },
  {
    path: "/:path(.*)",
    component: NotFound,
    meta: { isPublic: true },
  },
];
