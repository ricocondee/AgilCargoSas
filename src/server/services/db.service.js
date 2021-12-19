const mongoose = require('mongoose');
const { MONGODB_URI } = process.env;
const URI = MONGODB_URI;

exports.connect = () => {
  mongoose.connect(URI)
    .then(db => console.log('Conectado a base de datos.'))
    .catch(error => console.error(error));
};



