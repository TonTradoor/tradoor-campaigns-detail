import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { resources } from './index';

i18n.use(Backend).use(initReactI18next);
console.log("[[resources]]", resources)

if (!i18n.isInitialized) {
  i18n.init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    // lng: 'zh_CN',
    supportedLngs: ['en', 'ru'],
    // debug: true,
    // partialBundledLanguages: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
}
// 初始化 i18next
// 所有配置选项: https://www.i18next.com/overview/configuration-options

export default i18n;
