const asyncWrapper = require('../middlewares/asyncWrapper')
const Tasks = require('../models/tasks')
const { createCustomError } = require('../errors/customError')

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Tasks.find({})
    res.status(200).json({ tasks })
})

const getTask = asyncWrapper(async (req, res, next) => {
    const { id } = req.params
    const task = await Tasks.findOne({ _id: id })
    if(!task) {
        return next(createCustomError(`No such id: ${id}`, 404))
    }
    res.status(200).json(task)
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Tasks.create(req.body)
    res.status(201).json(task)
})

const updateTask = asyncWrapper(async (req, res, next) => {
    const { id } = req.params
    const task = await Tasks.findByIdAndUpdate({ _id: id }, req.body, {
        new: true,
        runValidators: true
    })
    if(!task) {
        return next(createCustomError(`No such id: ${id}`, 404))
    }
    res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res, next) => {
    const { id } = req.params
    const task = await Tasks.findOneAndDelete({ _id: id })
    if(!task) {
        return next(createCustomError(`No such id: ${id}`, 404))
    }
    res.status(200).json({ task })
})

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask }