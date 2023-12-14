const errorHandler = (error, req, res, next) => {
    console.log('There is an error')
    res.json({message: error.message, stack: process.env.NODE_ENV === 'production' ? null : error.stack})
}

module.exports = errorHandler;