exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_account')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user_account').insert([
        {
          id: 1,
          user_name: 'development',
          email: 'development@development.com',
          password: 'development',
          password_salt: 'none',
          password_hash_algorithm: 'none'
        },
        {
          id: 2,
          user_name: 'user',
          email: 'user@user.com',
          password: '7570ed453c77b471bb1f548ca4307aff26f49ac4',
          password_salt: 'c6bb15467f367d9e6c027cac7a79ebabe7be6826',
          password_hash_algorithm: 'MD5'
        },
        {
          id: 3,
          user_name: 'administrator',
          email: 'administrator@administrator.com',
          password: 'c7b2f44f3550d3fd5265eacaad97ce0bf7d09f9a',
          password_salt: 'c6bb15467f367d9e6c027cac7a79ebabe7be6826',
          password_hash_algorithm: 'MD5'
        }
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE user_account_id_seq RESTART WITH 4;');
    });
};
