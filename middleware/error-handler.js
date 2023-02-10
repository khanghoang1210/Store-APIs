const errorHandlerMiddleware = async (req, res, err, next)=>{
    console.log(err);
    return res.status(500).json({msg:'Something went wrong, try again later'})
}
module.exports = errorHandlerMiddleware;