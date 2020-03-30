class Dep {
  constructor() {
    this.deps = new Set();
  }
  depend() {
    if (Dep.target) {
      this.deps.add(Dep.target);
    }
  }
  notify() {
    this.deps.forEach(watcher => watcher.update());
  }
}
Dep.target = null;