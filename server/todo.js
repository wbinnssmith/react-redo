import bookshelf from './bookshelf';

const Todo = bookshelf.Model.extend({
  tableName: 'todos',
  hasTimestamps: true,

  toJSON() {
    const json = bookshelf.Model.prototype.toJSON.call(this);
    json.completed_at = json.completed_at || null;
    return json;
  }
});

export default Todo;
