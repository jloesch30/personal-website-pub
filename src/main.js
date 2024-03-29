import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

// materialize
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-design-icons/iconfont/material-icons.css';


const app = createApp(App);

app.use(router);

app.mount('#app');

export default app;
