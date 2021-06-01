import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import Login from "./pages/Login.vue";
import City from "./pages/City.vue";
import Countries from "./pages/Countries.vue";
import CountryCities from "./pages/CountryCities.vue";

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
    path: "/country/:countryName/cities",
    name: "country-cities",
    component: CountryCities,
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
