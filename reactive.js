function reactive(obj = {}) {
  Object.keys(obj).forEach((key) => {
    defineReactive(obj, key);
  });
}

function defineReactive(data, key) {
  let val = data[key];
  const dep = new Dep();
  Object.defineProperty(data, key, {
    set(newVal) {
      val = newVal;
      dep.notify();
    },
    get() {
      dep.depend();
      return val;
    }
  });
}