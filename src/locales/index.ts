import enJSON from './en.json';
import ruJSON from './ru.json';

// const maps = [
//   {
//     data: enJSON,
//     lang: 'en',
//   },
//   {
//     data: ruJSON,
//     lang: 'ru',
//   },
// ];

// interface IObj {
  // [key: string]: string;
// }
// 
// const transformData: IObj = maps.reduce((pre, curr) => {
//   const obj: IObj = {};
//   const keys: Record<string, any> = Object.keys(curr.data);
//   keys.forEach((key: string) => {
//     // @ts-ignore
//     obj[key] = curr.data[key as keyof typeof curr.data]['message'];
//   });
//   return Object.assign({}, pre, {
//     [curr.lang]: obj,
//   });
// }, {});

export const resources = {
  en: {
    translation: enJSON,
  },
  ru: {
    translation: ruJSON,
  },
 
};
