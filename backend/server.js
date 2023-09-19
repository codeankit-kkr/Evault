require('dotenv').config()
const express = require('express')
const app = express()
const port = 8000
const cors = require("cors");
require('./db/conn')

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
//     res.setHeader('Access-Control-Allow-Methods', 'Content-Type', 'Authorization');
//     next();
// })

const bcrypt = require('bcrypt')
const legalfiles = require('./models/Legalfiles')
const cookieparser = require('cookie-parser');
const auth = require('./middleware/auth')


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieparser())
app.use(cors())


app.post("/legalfiles", cors(), async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.cnfpassword;
        const findnum = await legalfiles.findOne({ mobilenumber: req.body.mobilenumber });
        if (findnum) {
            throw "notvalid";
        }
        if (password === cpassword) {
            const legfile = new legalfiles({
                fullname: req.body.fullname,
                mobilenumber: req.body.mobilenumber,
                password: req.body.password,
                confirmpassword: req.body.cnfpassword
            })
            console.log("the success part " + legfile);
            const token = await legfile.generateAuthToken();
            console.log("the token part" + token);

            // console.log(`Hello owrld : ${req.cookies.jwt}`)
            const saveemp = await legfile.save();
            res.json("signup")
        }
        else {
            res.send("Password are not matching");
            // return res.redirect("/signup")
            res.json("notvalid");
        }
    } catch (er) {
        // res.status(400).send(er);
        // res.redirect("/login");
        res.json(er);
    }
})

// app.get('/legalfiles', (req, res) => {
//     res.redirect("/")
// })

// app.get('/login', (req, res) => {
//     res.render("login")
// })



// app.get('/logout', auth, async (req, res) => {
//     try {
//         console.log(req.user)
//         req.user.tokens = req.user.tokens.filter((currEleme) => {
//             return currEleme.token != req.token;
//         })
//         // req.user.tokens = [];
//         res.clearCookie("jwt");
//         console.log("logout successfully");
//         await req.user.save();
//         res.render("login");
//     } catch (er) {
//         res.status(400).send(er)
//     }
// })

app.post('/login', async (req, res) => {
    try {
        // console.log("yaha hai")
        const mobilenumber = req.body.mobilenumber;
        const pass = req.body.password;
        const findnum = await legalfiles.findOne({ mobilenumber: mobilenumber });
        if (!findnum) {
            throw "notvalid";
        }
        const isMatch = await bcrypt.compare(pass, findnum.password);

        if (isMatch) {
            const token = await findnum.generateAuthToken();
            console.log("the token part" + token);
            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 600000),
                httpOnly: true
                // ,secure:true
            });
            res.json("login")
        }
        else {
            res.json("notvalid")
        }
    } catch (err) {
        res.json(err);
    }
})



app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})
