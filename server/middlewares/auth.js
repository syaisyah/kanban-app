const { User, Task } = require('../models')
const { verifyToken } = require('../helpers/token-helper')
const errorHandler = require('./errorHandler')



const authentication = (req, res, next) => {
  console.log('masuk authentication')
  try {
    let decode = verifyToken(req.headers.access_token)
    User.findByPk(+decode.id)
      .then(user => {
        if (user) {
          req.logginUser = { id: user.id, email: user.email }
          next()
        } else {
          next({ msg: 'User not found' })
        }
      }).catch(err => {
        next(err)
      })
  } catch (err) {
    next(err)
  }
}

const authorization = (req, res, next) => {
  let idTask = +req.params.id;
  Task.findByPk(idTask)
    .then(task => {
      if (task) {
        let isAuthorized = task.UserId === +req.logginUser.id;
        (isAuthorized) ? next() : next({ msg: 'UnAuthorized' })
      } else {
        next({ msg: 'Task not found' })
      }
    })
    .catch(err => next(err))
}


module.exports = { authentication, authorization }