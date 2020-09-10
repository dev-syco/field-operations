import config from '@/config';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(config.APP_BASE_URL),
  routes,
});

export default router;
