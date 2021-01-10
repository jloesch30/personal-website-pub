import { createWebHistory, createRouter} from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Landing from "@/views/Landing.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheLandingNav from "@/components/TheLandingNav.vue";

const baseUrl = '/personal-website';

const routes = [
  {
    path: baseUrl + '/resume',
    name: 'Resume',
    components: {default: About, footer: TheFooter}
  },
  {
    path: baseUrl + '/projects',
    name: 'Projects',
    components: {default: About, footer: TheFooter}
  },
  {
    path: baseUrl + '/',
    name: 'Landing',
    components: {default: Landing, nav: TheLandingNav}
  },
  {
    path: baseUrl + '/home',
    name: 'Home',
    components: {default: Home, footer: TheFooter}
  },
  {
    path: baseUrl + '/about',
    name: 'About',
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

