import 'prismjs/themes/prism-okaidia.min.css';
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import PrismCode from 'vue-prism-component';

const app = createApp(App);
app.component('prism-code', PrismCode);
app.mount('#app');
