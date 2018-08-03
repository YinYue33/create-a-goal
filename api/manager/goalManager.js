 var Goal = require()

exports.addGoal = (req, res, next) => { 
    let start = new Date(req.body.startDate); 
    let end = new Date(req.body.endDate);   
    req.body.startDate = `${start.getFullYear()}-${start.getMonth()}-${start.getDate()}`; 
    req.body.endDate = `${end.getFullYear()}-${end.getMonth()}-${end.getDate()}`;
  
    req.body.creator = req.user.id;  
    db.addGoal(req.body, handleResult(res, next));
} 

exports.getCreatedGoals = (req, res, next) =>{
    db.getCreatedGoals(req.user.id, handleResult(res, next)) 
};

exports.getAllGoals = (req, res, next) =>{
    db.getAllGoals(handleResult(res, next));
}; 

exports.deleteGoal = (req, res, next) =>{
    db.deleteGoal(req.params.id, handleResult(res, next));
}

exports.joinGoal = (req, res, next) => {
    db.joinGoal(req.body.goalID, req.user.id, handleResult(res, next));
}

function handleResult(res, next){
    return (err, result) => {
        if(err){
            next(createError(500));
        }else{
            res.status(200).send(result);
        }
    } 
}