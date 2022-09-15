module.exports = reqFilter = (req,res,next) => {
    if (!req.query.age) {
        res.send('<h1>Enter your age in the query box</h1>');
    } else if (req.query.age<18){
        res.send('<h1>sorry your age is below 18</h1>')
    }else {
        next();
    }
}