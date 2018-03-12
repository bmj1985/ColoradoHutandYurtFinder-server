exports.up = (knex, Promise) => {
  return knex.schema.createTable('user_account', table => {
    table.increments('id').primary();
    table.string('user_name');
    table.string('email');
    table.string('password');
    table.string('password_salt');
    table.string('password_hash_algorithm');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('user_account');
};
