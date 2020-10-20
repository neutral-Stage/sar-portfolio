import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/Home.vue");

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

    component: () => import("../views/About.vue"),
  },
  {
    path: "/skills",
    name: "Skills",

    component: () => import("../views/Skills.vue"),
  },
  {
    path: "/contact",
    name: "Contact",

    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/motivation",
    name: "Motivation",

    component: () => import("../views/Motivation.vue"),
  },
  {
    path: "/activities",
    name: "Activities",

    component: () => import("../views/Activities.vue"),
  },
  {
    path: "/portfolio",
    name: "Portfolio",

    component: () => import("../views/Portfolio.vue"),
  },
  {
    path: "/education",
    name: "Education",

    component: () => import("../views/Education.vue"),
  },
  {
    path: "/experience",
    name: "Experience",

    component: () => import("../views/Experience.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
