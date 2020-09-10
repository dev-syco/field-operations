import FieldService from '@/services/fieldService';
import { App } from 'vue';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $fieldService: FieldService;
  }
}

const fieldService = new FieldService();
export default {
  install: (app: App) => {
    app.config.globalProperties.$fieldService = fieldService;
  },
};
