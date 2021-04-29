const router = require('express').Router()
const taskRouter = require('./taskRouter')
const userRouter = require('./userRouter')



router.use('/users', userRouter)
router.use('/tasks', taskRouter)



module.exports = router