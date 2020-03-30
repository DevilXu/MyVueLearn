class Watcher {
  constructor(getter, options = {}) {
    this.getter = getter;
    const { computed } = options;
    this.computed = computed;
    if (computed) {
      this.dep = new Dep();
    } else {
      this.get();
    }
  }
  get() {
    Dep.target = this;
    const value = this.getter();
    Dep.target = null;
    return value;
  }
  update() {
    if (this.computed) {
      this.get();
      this.dep.notify();
    } else this.get();
  }
  depend() {
    this.dep.depend();
  }
}