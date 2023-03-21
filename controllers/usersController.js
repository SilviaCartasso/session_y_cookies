const {validationResult} = require("express-validator")


module.exports = {
    form: function(req, res, next) {
        res.render('login', {
            session: req.session,
            cookies: req.cookies.recordarColor

            

        })
    },
    submit: function(req, res, next) {
        /*req.session.backgroundColor = req.body.color; 
        const backgroundColor= req.session.color;*/
        
        let errors = validationResult (req);
        if(errors.isEmpty()){

            const {name, color, email, age, recordar} = req.body
           
           req.session.user = {
                name: name,
                email: email,
                color: color,
                age: age,
               
            };
            console.log(req.body)

            req.session.backgroundColor = req.body.color; 
            const backgroundColor= req.session.color

            if (req.body.recordarColor) {
                res.cookie(
                    "recordarColor",
                     req.session.user,
                {
                    expires: new Date(Date.now() +600000000),
                    httpOnly: true
                })
            }

            res.locals.user = req.session.user

            res.render("login", {
                session: req.session,
                usuario: req.body.name,
                color: req.body.color,
                email: req.body.email,
                edad: req.body.age,
                backgroundColor,   
                cookies: req.cookies.recordarColor   
            })
        } else {
            return res.render("login", {
                errors: errors.mapped()
            })
        }
    },
    forget: function (req, res) {
        req.session.destroy();
        if(req.cookies.recordarColor){
            res.cookie("recordarColor", "", {maxAge: -1})
        }
        res.redirect("/users/form")
    }
}