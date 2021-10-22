const {getResults}  = require('../model/index');
module.exports = function validateCheck(req,res,next){
    const {start,end} = req.query;
    if(!getResults){
        return res.sendStatus(404);
    }
    if(start>end){
        return res.sendStatus(400).json('Invalid Input!');
    }
    next();
}