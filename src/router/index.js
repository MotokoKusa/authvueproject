import Vue from "vue";
import VueRouter from "vue-router";
import AuthorizationPage from "../pages/authorization.vue";
import AnalyticsPage from "@/pages/analytics.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "authorization",
    component: AuthorizationPage,
  },
  {
    path: "/analytics",
    name: "analytics",
    component: AnalyticsPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
