import { App } from 'vue';
import locale from '@/locales/ru-RU.json';
import { get } from 'lodash';

/* eslint-disable */

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $translate: (key: string, options?: Record<string, any>) => string;
  }
}

const replaceParamsAtTransaction = (translation: string, params: Record<string, any>) => {
  Object.keys(params).forEach(param => {
    translation = translation.replace(`{${param}}`, params[param]);
  })
  return translation;
};

export default {
  install: (app: App) => {
    app.config.globalProperties.$translate = (key: keyof typeof locale, options?: Record<string, any>) => {
      const translation = get(locale, key) || key;
      // @ts-ignore
      return options ? replaceParamsAtTransaction(translation, options) : translation;
    };
  },
};
