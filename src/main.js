import { createApp } from 'vue';
import { Quasar } from 'quasar';
import quasarLang from 'quasar/lang/zh-TW';

import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

import App from './App.vue';

const app = createApp(App);

app.use(Quasar, {
  plugins: {},
  lang: quasarLang,
});

app.mount('#app');
