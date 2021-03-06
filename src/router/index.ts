import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Weather from '@/views/Weather.vue'
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
    path: "/:city",
    name: "Weather",
    component: Weather
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
