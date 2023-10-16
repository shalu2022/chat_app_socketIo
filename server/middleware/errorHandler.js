const notFound = ( req, res, next)=>{
 const err = new Error(`Page not found - ${req.originalUrl}`)
 res.status(404)
 next(err);
}

const errorHandler = (err, req, res, next) =>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    const errMsg = err.message
    res.status(statusCode).json({
        error: errMsg,
        stack: process.env.ENV === "development" ? err.stack : null,
    })
}

module.exports = {notFound, errorHandler}