// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку,
// передавая вызов в f не более одного раза в ms миллисекунд.
//  Те вызовы, которые попадают в период «торможения», игнорируются.

function throttle(f, ms) {
  let isReady = true;
  let args;
  let context;
  return function wrapper() {
    if (!isReady) {
      args = arguments;
      context = this;
      return;
    }
    f.apply(this, arguments);
    isReady = false;
    setTimeout(() => {
      isReady = true;
      if (args) {
        wrapper.apply(context, args);
        context = null;
        args = null;
      }
    }, ms);
  };
}
