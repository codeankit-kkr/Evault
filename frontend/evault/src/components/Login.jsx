import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Login() {
    const [mobilenumber, setmobilenumber] = useState("");
    const [password, setpassword] = useState("");
    const handleChange = (event) => {
        const newValue = event.target.value;
        if (newValue.match(/^\d{0,10}$/)) {
            setmobilenumber(newValue);
        }
    }
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/login", {
                mobilenumber, password
            })
                .then(res => {
                    if (res.data == "login") {
                        console.log("haa bhai")
                        navigate("/");
                    }
                    else if (res.data == "notvalid") {
                        navigate("/login");
                        console.log("notvalid")
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
                <form class="form" id="login" action='post'>
                    <h1 class="form__title">Login</h1>
                    <div class="form__message form__message--error"></div>
                    <div class="form__input-group">
                        <input type="text" id='signmobilenumber' name='mobilenumber' className='form__input' placeholder='Mobile Number' value={mobilenumber} onChange={handleChange} />
                        <div class="form__input-error-message"></div>
                    </div>
                    <div class="form__input-group">
                        <input type="password" name='password' class="form__input" autofocus placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <div class="form__input-error-message"></div>
                    </div>
                    <button class="form__button" type="submit" onClick={handleSubmit}>Continue</button>
                    <p class="form__text">
                        <a href="#" class="form__link">Forgot your password?</a>
                    </p>
                    <p class="form__text">
                        <Link class="form__link" to="/signup" id="linkCreateAccount">Don't have an account? Create account</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
