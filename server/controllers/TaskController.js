const { Task, User } = require('../models')
const errorHandler = require('../middlewares/errorHandler');


class TaskController {
  static createTask(req, res, next) {
    const UserId = req.logginUser.id
    const newTask = {
      title: req.body.title,
      category: 'Backlog',
      UserId
    };

    Task.create(newTask)
      .then(task => {
        res.status(201).json({ message: "created new task success" })
      })
      .catch(err => next(err))
  }

  static findAllTask(req, res, next) {
    console.log('masuk find')
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

  static nextCategory(req, res, next) {
    let idTask = +req.params.id;
    Task.findByPk(idTask)
      .then(task => {
        let nextCat;
        if (task.category.toLowerCase() === 'backlog') {
          nextCat = 'Todo'
        } else if (task.category.toLowerCase() === 'todo') {
          nextCat = 'Doing'
        } else if (task.category.toLowerCase() === 'doing') {
          nextCat = 'Done'
        }

        let objTask = { title: req.body.title, category: nextCat };
        return Task.update(objTask, {
          where: { id: idTask },
          returning: true
        })
      })
      .then(task => {
        res.status(200).json(task[1][0])
      })
      .catch(err => next(err))
  }

  static backCategory(req, res, next) {
    let idTask = +req.params.id;
    Task.findByPk(idTask)
      .then(task => {
        let backCat;
        if (task.category.toLowerCase() === 'todo') {
          backCat = 'Backlog'
        } else if (task.category.toLowerCase() === 'doing') {
          backCat = 'Todo'
        } else if (task.category.toLowerCase() === 'done') {
          backCat = 'Doing'
        }

        let objTask = { title: req.body.title, category: backCat };
        return Task.update(objTask, {
          where: { id: idTask  },
          returning: true
        })
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