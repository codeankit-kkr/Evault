const jwt = require("jsonwebtoken")
const legalfiles = require("../models/Legalfiles")

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
        console.log(verifyUser);
        const user = await legalfiles.findOne({ _id: verifyUser._id });
        console.log(user);

        req.token = token;
        req.user = user;
        next();
    } catch (er) {
        console.log(er)
        res.status(404).send(er)
    }
}

module.exports = auth;