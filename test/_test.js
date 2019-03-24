const { TodoList } = require('../js/app.js')

function todoListCanAddItem() {
  // подготовка
  let list = new TodoList();

  // действие
  list.addItem('test');

  // проверка
  if (!list.items.some(item => item.name === 'test')) {
    throw 'todoListCanAddItem - ERROR';
  }
}

function todoListCanCheckItem() {
  // подготовка
  let list = new TodoList(['item1', 'item2']);

  // действие
  list.done(1);

  // проверка
  if (!list.items[1].isDone) {
    throw 'todoListCanCheckItem - ERROR';
  }
}

todoListCanAddItem();
todoListCanCheckItem();
