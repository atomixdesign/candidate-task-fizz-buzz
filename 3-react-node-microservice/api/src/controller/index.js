const Results = require('../model');

function getResults(req,res){
    const {start,end} = req.query;
    const startParameter = Number(start);
    const endParameter = Number(end);
    if(!startParameter||!endParameter){
        return res.status(404).json('Parameters is missing!')
    }
    const results = Results.getResults(startParameter,endParameter);
    return res.status(201).json(results);
}

module.exports = {getResults};