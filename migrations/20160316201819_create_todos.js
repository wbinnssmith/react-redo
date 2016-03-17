exports.up = function(knex) {
  return knex.schema.createTable('todos', t => {
    t.bigIncrements('id').primary().unsigned();
    t.text('description');
    t.datetime('completed_at');
    t.datetime('updated_at');
    t.datetime('created_at');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('todos');
};
