const database = require('../database-connection');

module.exports = {
  returnFirstItem(arr) {
    return arr[0];
  },
  listHuts() {
    return database('hut');
  },
  readHuts(id) {
    return database('hut')
      .where('id', id)
      .then(this.returnFirstItem);
  },
  createHuts(hut) {
    return database('hut')
      .insert(hut)
      .returning('*')
      .then(this.returnFirstItem);
  },
  updateHuts(id, hut) {
    return database('hut')
      .update(hut)
      .where('id', id)
      .returning('*')
      .then(this.returnFirstItem);
  },
  deleteHuts(id) {
    return database('hut')
      .delete()
      .where('id', id);
  }
};
