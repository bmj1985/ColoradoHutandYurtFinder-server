const hash = require('hash.js');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_account')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('user_account').insert([
        {
          id: 1,
          user_name: hash.sha256().update('development').digest('hex'),
          email: hash.sha256().update('development@development.com').digest('hex'),
          password: hash.sha256().update('development').digest('hex'),
          password_salt: hash.sha256().update('Wilderness is not a luxury but a necessity of the human spirit, and as vital to our lives as water and good bread. A civilization which destroys what little remains of the wild, the spare, the original, is cutting itself off from its origins and betraying the principle of civilization itself').digest('hex'),
          password_hash_algorithm: 'SHA256',
        },
        {
          id: 2,
          user_name: hash.sha256().update('development').digest('hex'),
          email: hash.sha256().update('development@development.com').digest('hex'),
          password: hash.sha256().update('development').digest('hex'),
          password_salt: hash.sha256().update('Wilderness is not a luxury but a necessity of the human spirit, and as vital to our lives as water and good bread. A civilization which destroys what little remains of the wild, the spare, the original, is cutting itself off from its origins and betraying the principle of civilization itself').digest('hex'),
          password_hash_algorithm: 'SHA256',
        },
        {
          id: 3,
          user_name: hash.sha256().update('administrator').digest('hex'),
          email: hash.sha256().update('administrator@administrator.com').digest('hex'),
          password: hash.sha256().update('administrator').digest('hex'),
          password_salt: hash.sha256().update('Wilderness is not a luxury but a necessity of the human spirit, and as vital to our lives as water and good bread. A civilization which destroys what little remains of the wild, the spare, the original, is cutting itself off from its origins and betraying the principle of civilization itself').digest('hex'),
          password_hash_algorithm: 'SHA256',
        },
      ]))
    .then(() => knex.raw('ALTER SEQUENCE user_account_id_seq RESTART WITH 4;'));
};
