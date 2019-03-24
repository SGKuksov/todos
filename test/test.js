// import { TodoList, TodoItem } from '../js/app.js';
const { TodoList } = require('../js/app.js')

function todoListCanAddItem() {
  let list = new TodoList();

  list.addItem('test');

  if (!list.items.some(item => item.name === 'test')) {
    throw 'todoListCanAddItem - ERROR';
  }
}

todoListCanAddItem();
