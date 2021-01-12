import { createWebHistory, createRouter} from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Academics from "@/views/Academics.vue";
import Landing from "@/views/Landing.vue";
import Misc from "@/views/Misc.vue";


const baseUrl = '/personal-website';

const routes = [
  {
    path: baseUrl + '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: baseUrl + '/home',
    name: 'Home',
    component: Home
  },
  {
    path: baseUrl + '/academics',
    name: 'Academics',
    component: Academics  
  },
  {
    path: baseUrl + '/misc',
    name: 'Miscellaneous',
    component: Misc
  },
  {
    path: baseUrl + '/about',
    name: 'About',
    component: About
  }
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

