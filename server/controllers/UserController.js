const { User } = require('../models')
const { comparePassword } = require('../helpers/password-helper')
const { generateToken } = require('../helpers/token-helper')
const errorHandler = require('../middlewares/errorHandler')
const { OAuth2Client } = require('google-auth-library');


class UserController {
  static register(req, res, next) {
    const { full_name, email, password } = req.body
    const newUser = { full_name, email, password }
    User.create(newUser)
      .then(user => {
        res.status(201).json({ message: 'create new user success', id: user.id, email: user.email })
      })
      .catch(err => next(err))
  }

  static login(req, res, next) {
    const { email, password } = req.body;
    User.findOne({ where: { email } })
      .then(user => {
        if (user && comparePassword(password, user.password)) {
          let access_token = generateToken({ id: user.id, email: user.email })
          res.status(200).json({ email: user.email, access_token })
        } else {
          next({ msg: 'Invalid email or password' })
        }
      })
      .catch(err => {
        next(err)
      })
  }

  static googleLogin(req, res, next) {
    const client = new OAuth2Client(process.env.CLIENT_ID);
    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken: req.body.googleToken,
        audience: process.env.CLIENT_ID,
      });
      const payload = ticket.getPayload();
      User.findOrCreate({
        where: { email: payload.email },
        defaults: {
          full_name: payload.name,
          email: payload.email,
          password: process.env.PASSWORD_GOOGLE_LOGIN_KANBAN
        }
      })
        .then(user => {
          let payload = { id: user[0].id, email: user[0].email }
          let access_token = generateToken(payload)
          res.status(200).json({ access_token, email: user[0].email })
        })
        .catch(err => next(err))
    }
    verify().catch(console.error);
  }


}

module.exports = UserController