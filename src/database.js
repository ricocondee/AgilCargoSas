const mongoose = require('mongoose');
const URI = 'mongodb://agilcargoadmin:database%20agilcargo%20group4@agilcargodb-shard-00-00.fsr4r.mongodb.net:27017,agilcargodb-shard-00-01.fsr4r.mongodb.net:27017,agilcargodb-shard-00-02.fsr4r.mongodb.net:27017/AgilCargoDB?authSource=admin&replicaSet=atlas-6acfi4-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true';

mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;
