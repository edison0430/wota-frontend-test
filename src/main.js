import { createApp } from 'vue';
import { Quasar, Notify } from 'quasar';
import quasarLang from 'quasar/lang/zh-TW';

import router from './router.js';
import store from './store/index.js';

import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.use(Quasar, {
  plugins: { Notify },
  lang: quasarLang,
});

app.mount('#app');
