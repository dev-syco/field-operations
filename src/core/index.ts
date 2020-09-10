import { createApp } from 'vue';
import store from '@/core/store';
import router from '@/core/router';
import fieldService from '@/plugins/fieldService';
import translate from '@/plugins/translate';
import AntD from 'ant-design-vue';

import App from '../App.vue';

const app = createApp(App);

[store, router, fieldService, translate, AntD].forEach((plugin) => app.use(plugin));

export { app, store, router };
