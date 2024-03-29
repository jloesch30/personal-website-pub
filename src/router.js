import { createWebHistory, createRouter} from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import Landing from "@/views/Landing.vue";
import Resume from "@/views/Resume.vue";
import Contact from "@/views/Contact.vue";
import BlogMain from "@/views/blog/BlogMain.vue";
import Lstmlite from "@/views/blog/Lstm-lite.vue";
import NotFound from "@/views/NotFound.vue";


const baseUrl = '/personal-website';

const routes = [
  {
    path: baseUrl + '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: baseUrl + '/home/',
    name: 'Home',
    component: Home
  },
  {
    path: baseUrl + '/projects/',
    name: 'Projects',
    component: Projects  
  },
  {
    path: baseUrl + '/contact/',
    name: 'Contact',
    component: Contact
  },
  {
    path: baseUrl + '/resume/',
    name: 'Resume',
    component: Resume
  },
  {
    path: baseUrl + '/about/',
    name: 'About',
    component: About
  },
  {
    path: baseUrl + '/blog/',
    component: BlogMain,
    children: [
      {
        path: 'lstm-lite',
        component: Lstmlite
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
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

