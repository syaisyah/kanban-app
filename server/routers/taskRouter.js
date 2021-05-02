const router = require('express').Router()
const TaskController = require('../controllers/TaskController')
const { authentication, authorization } = require('../middlewares/auth')


router.use(authentication)
router.post('/', TaskController.createTask)
router.get('/', TaskController.findAllTask)
router.get('/:id', TaskController.getTaskById)

router.put('/:id', authorization, TaskController.updateTask)
router.patch('/:id', authorization, TaskController.updateCategory)
router.delete('/:id', authorization, TaskController.deleteTaskById)







module.exports = router