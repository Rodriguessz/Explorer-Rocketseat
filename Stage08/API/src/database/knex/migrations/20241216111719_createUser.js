
exports.up = knex => {
    return knex.schema.createTable('users', table => {
        table.increments('id');
        table.text('name');
        table.text('email');
        table.text('password');
        table.text('avatar').nullable();
        table.timestamp('created_at').default(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
}


exports.down = knex => {
    return knex.schema.dropTable('users');
};
