export const debounce = (func, delay = 500) => {
  let timer = null;
  return function(...args) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
        func.apply(this, args)
    }, delay);
  }
}
