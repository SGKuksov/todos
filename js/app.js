class TodoList {
  constructor(names = []) {
    this.fetch = global.fetch;
    this.items = names.map(name => new TodoItem(name));
  }

  load() {
    return this.fetch('http://localhost:3000/load').then(names => {
      this.items = names.map(name => new TodoItem(name));
    });
  }

  save() {
    let names = this.items
      .filter(item => !item.isDone)
      .map(item => item.name);

      return this.fetch('http://localhost:3000/save', {
        method: 'POST',
        body: names
      })
  }

  addItem(name) {
    this.items.push(new TodoItem(name));
  }

  done(index) {
    this.items[index].done();
  }

  clear() {
    this.items = this.items.filter(item => !item.isDone);
  }
}

class TodoItem {
  constructor(name) {
    this.name = name;
    this.isDone = false;
  }

  done() {
    this.isDone = true;
  }
}

module.exports = {
  TodoList,
  TodoItem
};
