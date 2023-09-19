import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
export default function Login() {
    return (
        <div className='login_body'>

            <div className='container'>
                <form class="form" id="login">
                    <h1 class="form__title">Login</h1>
                    <div class="form__message form__message--error"></div>
                    <div class="form__input-group">
                        <input type="text" class="form__input" autofocus placeholder="Mobile Number" />
                        <div class="form__input-error-message"></div>
                    </div>
                    <div class="form__input-group">
                        <input type="password" class="form__input" autofocus placeholder="Password" />
                        <div class="form__input-error-message"></div>
                    </div>
                    <button class="form__button" type="submit">Continue</button>
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
