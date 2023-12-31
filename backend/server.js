require('dotenv').config()
const express = require('express')
const app = express()
const multer = require('multer');
const fs = require('fs');
const { Web3 } = require('web3');
const { Web3Storage } = require('web3.storage')
const { getFilesFromPath, File } = require('web3.storage')
const crypto = require('crypto-js');

require('./db/conn')

const port = 8000
const cors = require("cors");

const bcrypt = require('bcrypt')
const legalfiles = require('./models/Legalfiles')
const cookieparser = require('cookie-parser');
const auth = require('./middleware/auth')





const corsOptions = {
    origin: true,
    credentials: true,
};

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieparser())
app.use(cors(corsOptions))

function getAccessToken() {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDMzRUM1MTg2NDc4OEQzNEMxNzIyRjNiMDAyQTQxMEY2ZTI0NDFFMDAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTUyMzY4NjE2ODYsIm5hbWUiOiJzYWhpbCJ9.J41Ss2JkK3KOp1AH_yP0UrLCctZXMFH3XMMwIOnZ9Ak"
}

function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
}





// const web3 = new Web3("https://sepolia.infura.io/v3/");
// // const web3 = new Web3("http://localhost:8546");

// const abiFile = fs.readFileSync("./Contracts/evault.json");
// const abi = JSON.parse(abiFile);
// const addresscontract = "0xF83Ab10dB01b3b2f879a1d48788Fc32887287273";
// const addressuser = "0xc37AB49d350b1001fA6d05ca3140bBEfaa69F5A9";

// const contract = new web3.eth.Contract(abi, addresscontract);



app.post("/signup", cors(), async (req, res) => {
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


app.get("/getuser", auth, async (req, res) => {
    console.log(req.user);
    res.json("ok")
})


async function storeFiles(files) {
    const client = makeStorageClient()
    const cid = await client.put(files)
    console.log('stored files with cid:', cid)
    return cid
}

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage });

async function getFiles(path) {
    const files = await getFilesFromPath(path)
    console.log(`read ${files.length} file(s) from ${path}`)
    return files
}
// Define the route for file upload
app.post('/uploadfile', upload.single('file'), async (req, res) => {
    // Get the file from the request
    const file = req.file;
    // Check if the file is present
    console.log(file);
    if (!file) {
        res.status(400).json({ error: 'No file uploaded' });
        return;
    }
    // Read the file and send it to IPFS
    // console.log(file.path)

    try {
        const data = fs.readFileSync(`./uploads/${file.filename}`, 'utf8');

        // Generate a random key for encryption
        const key = crypto.lib.WordArray.random(16).toString();

        // Encrypt the file using the random key
        const encryptedData = crypto.AES.encrypt(data, key).toString();
        console.log(encryptedData)

        // Save the encrypted file
        try {
            fs.writeFileSync(`./uploads/${file.filename}`, encryptedData);
            console.log('File encrypted successfully');
        } catch (err) {
            console.error('Error writing the encrypted file:', err);
        }
    } catch (err) {
        console.error('Error reading the file:', err);
    }

    // const uploaded = await contract.methods.create_folder(addressuser, "my files").call();
    // console.log(uploaded)
    const files = await getFiles(`uploads/${file.filename}`)
    console.log(files)

    const mycid = await storeFiles(files);


    res.json(mycid);
});

// app.get('/legalfiles', (req, res) => {
//     res.redirect("/")
// })

// app.get('/login', (req, res) => {
//     res.send("ha")
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

app.post('/login', cors(), async (req, res) => {
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
                httpOnly: false,
                secure: false
                // ,secure:true
            });
            console.log("done");
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
