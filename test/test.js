const { TodoList } = require('../js/app.js');
const { expect } = require('chai');

it('Можно добавлять элементы', () => {
  // подготовка
  let list = new TodoList();

  // действие
  list.addItem('test');

  // проверка
  expect(list.items.map(i => i.name)).to.include('test');
});

it('Можно чекать элементы оп индексу', () => {
  // подготовка
  let list = new TodoList(['item1', 'item2']);

  // действие
  list.done(1);

  // проверка
  expect(!list.items[1].isDone).to.be.false;
});
