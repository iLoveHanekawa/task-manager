const { CustomError } = require('../errors/customError')

const errorHandler = (err, req, res, next) => {
    console.log(err.statusCode)
    if(err instanceof CustomError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    res.status(500).json({ msg: err })
}

module.exports = errorHandler