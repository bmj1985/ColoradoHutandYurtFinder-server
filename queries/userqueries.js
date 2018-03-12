const database = require('../database-connection');

module.exports = {
  returnFirstItem(arr) {
    return arr[0];
  },
  listUsers() {
    return database('user_account');
  },
  readUsers(id) {
    return database('user_account')
      .where('id', id)
      .then(this.returnFirstItem);
  },
  createUsers(user) {
    return database('user_account')
      .insert(user)
      .returning('*')
      .then(this.returnFirstItem);
  },
  updateUsers(id, user) {
    return database('user_account')
      .update(user)
      .where('id', id)
      .returning('*')
      .then(this.returnFirstItem);
  },
  deleteUsers(id) {
    return database('user_account')
      .delete()
      .where('id', id);
  }
};
