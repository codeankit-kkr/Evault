const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const legalFileSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: Number,
        unique: true,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]

})

legalFileSchema.methods.generateAuthToken = async function () {
    try {
        console.log(this._id);
        const token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token })
        await this.save()
        return token;

    } catch (error) {
        res.send("the error part" + error);
        console.log("the error part " + error);
    }
}

legalFileSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        // const passhash = await bcrypt.hash(this.password, 10);
        const salt = bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        this.confirmpassword = await bcrypt.hash(this.confirmpassword, salt);
    }
    next();
})

const legalfiles = new mongoose.model('Legalfiles', legalFileSchema)

module.exports = legalfiles;