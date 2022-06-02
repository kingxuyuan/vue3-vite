/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-05-25 21:08:33
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-06-02 12:35:21
 * @Description: 项目入口
 */
import { createApp } from 'vue';
import 'lib-flexible';
import router from './router';
import { store, key } from '@/store';
import App from './App.vue';
import '@/assets/style/index.scss';

import { setupVant } from '@/plugins/vant';

console.log(import.meta.env);

const app = createApp(App);

app.use(router)
    .use(store, key)
    .use(setupVant)
    .mount('#app');