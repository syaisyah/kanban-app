const bcrypt = require('bcrypt');


const hashPassword = (password) => bcrypt.hashSync(password, 10)
const comparePassword = (password, hashPassword) => bcrypt.compareSync(password, hashPassword);


module.exports = { hashPassword, comparePassword }