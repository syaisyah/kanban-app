const { Task, User } = require('../models')
const errorHandler = require('../middlewares/errorHandler');


class TaskController {
  static createTask(req, res, next) {
    const UserId = req.logginUser.id
    const newTask = {
      title: req.body.title,
      category: req.body.category,
      UserId
    };

    Task.create(newTask)
      .then(task => {
        res.status(201).json({ message: "created new task success" })
      })
      .catch(err => next(err))
  }

  static findAllTask(req, res, next) {
    Task.findAll({
      include: {
        model: User,
        attributes: {
          exclude: ['password']
        }
      }
    })
      .then(tasks => {
        res.status(200).json(tasks)
      })
      .catch(err => next(err))
  }

  static getTaskById(req, res, next) {
    let taskId = +req.params.id;
    Task.findByPk(taskId)
      .then(task => {
        if (task) {
          res.status(200).json(task)
        } else {
          next({ msg: `Task not found` })
        }
      })
      .catch(err => next(err))
  }


  static updateTask(req, res, next) {
    const { title, category } = req.body;
    const updateTask = { title, category };
    Task.update(updateTask, {
      where: {
        id: +req.params.id
      },
      returning: true
    })
      .then(task => {
        res.status(200).json(task[1][0])
      })
      .catch(err => next(err))
  }

  static updateCategory(req, res, next) {
    const category = req.body.category;
    const idTask = +req.params.id;
    Task.update({ category }, {
      where: {
        id: idTask
      },
      returning: true
    })
      .then(task => {
        res.status(200).json(task[1][0])
      })
      .catch(err => next(err))
  }

  static deleteTaskById(req, res, next) {
    Task.destroy({
      where: {
        id: +req.params.id
      }
    })
      .then(_ => {
        res.status(200).json({ message: "Delete task success" })
      })
      .catch(err => next(err))
  }
}


module.exports = TaskController