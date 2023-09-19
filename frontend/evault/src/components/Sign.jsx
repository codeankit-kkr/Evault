import React from 'react'
import { Link } from 'react-router-dom'
import "./signup.css"
export default function Sign() {
    return (
        <div className='login_body'>

            <div className='container'>
                <form class="form" id="createAccount">
                    <h1 class="form__title">Create Account</h1>
                    <div class="form__message form__message--error"></div>
                    <div class="form__input-group">
                        <input type="text" id="signupUsername" class="form__input" autofocus placeholder="Mobile Number" />
                        <div class="form__input-error-message"></div>
                    </div>

                    <div class="form__input-group">
                        <input type="password" class="form__input" autofocus placeholder="Password" />
                        <div class="form__input-error-message"></div>
                    </div>
                    <div class="form__input-group">
                        <input type="password" class="form__input" autofocus placeholder="Confirm password" />
                        <div class="form__input-error-message"></div>
                    </div>
                    <button class="form__button" type="submit">Continue</button>
                    <p class="form__text">
                        <Link class="form__link" to="/login" id="linkLogin">Already have an account? Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
