import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Categories from "../views/Categories.vue";
import Contact from "../views/Contact.vue";
import RegisterLogin from "../views/RegisterLogin.vue";
import Rankings from "../views/Rankings.vue";
import ShowRanking from "../views/ShowRanking.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/register-login",
    name: "RegisterLogin",
    component: RegisterLogin
  },
  {
    path: "/rankings",
    name: "Rankings",
    component: Rankings
  },
  {
    path: "/show-ranking",
    name: "ShowRanking",
    component: ShowRanking
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
