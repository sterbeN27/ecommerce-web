import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/HelloWorld.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/page3",
    name: "",
    beforeEnter() {
      window.open("...", "_blank");
    },
  },
  {
    path: "/page2",
    name: "",
    component: () => import(""),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;