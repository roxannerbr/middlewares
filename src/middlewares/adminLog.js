const adminLog = (req,res,next) => {
    const {user} = req.query;
    const admins = ["Belen", "Graciela", "Sergio", "Lorenzo"]

    if(admins.includes(user)){
       req.admin = user
       return next()
    }else{
       res.render('index',{
           texto:"No tienes permitido el ingreso"
       })
    }
}

module.exports = adminLog