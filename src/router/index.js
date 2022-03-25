import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/quemSomos.vue";
import Contacts from "../views/contactos.vue";
import Outdoors from "../views/outdoors.vue";
import Profile from "../views/perfil.vue";
import Admin from "../views/admin.vue";
import Support from "../views/support.vue"
// import { getSupportInfo } from "prettier";


Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/outdoors",
    name: "Outdoors",
    component: Outdoors,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/support",
    name: "Support",
    component: Support,
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,

});

export default router;
