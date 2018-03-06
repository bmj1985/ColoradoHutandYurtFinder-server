const database = require('./database-connection');

module.exports = {
  returnFirstItem(arr) {
    return arr[0];
  },
  list() {
    return database('hut');
  },
  read(id) {
    return database('hut')
      .where('id', id)
      .then(this.returnFirstItem);
  },
  create(hut) {
    return database('hut')
      .insert(hut)
      .returning('*')
      .then(this.returnFirstItem);
  },
  update(id, hut) {
    return database('hut')
      .update(hut)
      .where('id', id)
      .returning('*')
      .then(this.returnFirstItem);
  },
  delete(id) {
    return database('hut')
      .delete()
      .where('id', id);
  }
};
