import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

// @ts-ignore
import './assets/prism.js';
import './assets/prism.css';

const app = createApp(App);

app.mount('#app');
