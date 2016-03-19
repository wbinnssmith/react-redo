import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Todo from '../todo';
import { TodoList } from '../todo-list';

test('todolist renders todo components for each todo in the store', t => {
  t.plan(1);
  const rendered = shallow(
    React.createElement(TodoList, {
      isEditing: false,
      todos: [
        {
          description: 'my first todo'
        },
        {
          description: 'my second todo'
        }
      ]
    }));

  t.is(rendered.find(Todo).length, 2);
});
