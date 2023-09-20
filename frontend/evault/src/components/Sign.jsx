import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import "./signup.css"
import { useState } from 'react';
export default function Sign() {
    const [fullname, setfullname] = useState("");
    const [mobilenumber, setmobilenumber] = useState("");
    const [password, setpassword] = useState("");
    const [cnfpassword, setcnfpassword] = useState("");
    const navigate = useNavigate();
    const handleChange = (event) => {
        const newValue = event.target.value;
        if (newValue.match(/^\d{0,10}$/)) {
            setmobilenumber(newValue);
        }
    }
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/signup", {
                fullname, mobilenumber, password, cnfpassword
            })
                .then(res => {
                    if (res.data == "signup") {
                        navigate("/connectmeta");
                    }
                    else if (res.data == "notvalid") {
                        navigate("/login");
                    }
                })


        }
        catch (err) {
            console.log(err);
        }

    }

    return (
        <div className='login_body'>

            <div className='container'>
                <form class="form" id="createAccount" action='post'>
                    <h1 class="form__title">Create Account</h1>
                    <div class="form__message form__message--error"></div>
                    <div class="form__input-group">
                        <input type="text" id="signupfullname" name='fullname' class="form__input" autofocus placeholder="Enter Full Name" value={fullname} onChange={(e) => { setfullname(e.target.value) }} />
                        <div class="form__input-error-message"></div>
                    </div>
                    <div class="form__input-group">
                        <input type="text" id='signmobilenumber' name='mobilenumber' className='form__input' placeholder='Mobile Number' value={mobilenumber} onChange={handleChange} />
                        <div class="form__input-error-message"></div>
                    </div>

                    <div class="form__input-group">
                        <input type="password" name='password' class="form__input" autofocus placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <div class="form__input-error-message"></div>
                    </div>
                    <div class="form__input-group">
                        <input type="password" class="form__input" name='cnfpassword' autofocus placeholder="Confirm password" value={cnfpassword} onChange={(e) => { setcnfpassword(e.target.value) }} />
                        <div class="form__input-error-message"></div>
                    </div>
                    <button class="form__button" type="submit" onClick={handleSubmit}>Continue</button>
                    <p class="form__text">
                        <Link class="form__link" to="/login" id="linkLogin">Already have an account? Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
