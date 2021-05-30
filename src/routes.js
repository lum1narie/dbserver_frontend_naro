import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import Axios from "./pages/Axios.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/axios", component: Axios },
  { path: "/:path(.*)", component: NotFound },
];
