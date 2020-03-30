function Computed(getter) {
  const def = {};
  const innerWatcher = new Watcher(getter, { computed: true });
  Object.defineProperty(def, 'value', {
    get() {
      innerWatcher.depend();
      return innerWatcher.get();
    }
  });
  return def;
}