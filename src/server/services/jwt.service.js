const jsonwebtoken = require('jsonwebtoken');
const { JWT_SECRET_KEY } = process.env;

/**
 *
 * @param {Number} _id 
 * @param {String} email 
 * @returns {String}
 */

function generateAccessToken(id, email) {
  return jsonwebtoken.sign({ id, email }, JWT_SECRET_KEY, { expiresIn: '1d' });
}

/**
 *
 * @param {String} token
 * @returns {{ _id: Number, email: String }}
 */
function verifyAccessToken(token) {
  return jsonwebtoken.verify(token, JWT_SECRET_KEY);
}

module.exports = generateAccessToken, verifyAccessToken;