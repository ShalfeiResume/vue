import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AppHome from "@/views/AppHome.vue";
import AppView from "@/views/AppAbout.vue";
import AppSignUp from "@/views/AppSignUp.vue";
import AppSignIn from "@/views/AppSignIn.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: AppHome,
  },
  {
    path: "/about",
    name: "about",
    component: AppView,
  },
  {
    path: "/todoList",
    name: "todoList",
    component: AppView,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: AppSignUp,
  },
  {
    path: "/signIn",
    name: "signIn",
    component: AppSignIn,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
