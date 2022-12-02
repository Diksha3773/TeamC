 const checkDepartment=(req,res,next)=>{
    // req.department=req.get('host').split('.')[0];
    req.department='IT'
    next();
}
module.exports=checkDepartment;