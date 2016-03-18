import test from 'ava';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';

import Todo from '../todo';
import { TodoList } from '../todo-list';

test('todolist renders todo components for each todo in the store', t => {
  const rendered = shallow(
    <TodoList
      isEditing: false,
      todos={{
        1: {
          description: "my first todo"
        },
        2: {
          description: "my second todo"
        }
      }}
    />
  );

  t.ok(rendered.find(Todo).length, 2);
});
