module.exports = {
    main:(req,res) =>{
        res.render('index',{
            texto : "Home Page"
        })
    },
    about:(req,res) =>{
        res.send('Bienvenidos a la vista ABOUT')
    },
    register:(req,res) =>{
        res.send('Bienvenidos a la vista REGISTER')
    },
    processRegister:(req,res) =>{
        res.redirect('/')
    },
    login:(req,res) =>{
        res.send('Bienvenidos a la vista LOGIN')
    },
    processLogin:(req,res) =>{
        res.redirect('/')
    }
}