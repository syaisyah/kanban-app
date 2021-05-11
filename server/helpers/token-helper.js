const jwt = require('jsonwebtoken');

const generateToken = (payload) => jwt.sign(payload, process.env.JWT_SECRET);
const verifyToken = (token) => jwt.verify(token, process.env.JWT_SECRET);


module.exports = { generateToken, verifyToken }