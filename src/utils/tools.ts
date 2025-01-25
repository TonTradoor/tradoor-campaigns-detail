/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const debounce = (fn: Function, delay: number) => {
  let timer: any = null;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
