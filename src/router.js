import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Landing from "@/views/Landing.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheLandingNav from "@/components/TheLandingNav.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    components: {default: Landing, nav: TheLandingNav}
  },
  {
    path: "/home",
    name: "Home",
    components: {default: Home, footer: TheFooter}
  },
  {
    path: "/about",
    name: "About",
    components: {default: About, footer: TheFooter}
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // set scroll when navigating
  scrollBehavior(_, _2, savedPos) {
    if (savedPos) {
      return savedPos;
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
});

export default router;

