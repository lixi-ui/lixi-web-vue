import { createApp } from 'vue';

import router from './router/index.js';
import Antd from 'ant-design-vue';
import App from "./app.vue";
import 'ant-design-vue/dist/antd.css';
// import Button from '../src/components/button/package/index.js';
import LixiUiVue from 'lixi-ui-vue'


var app = createApp(App).use(router).use(Antd).use(LixiUiVue);

app.mount('#app');