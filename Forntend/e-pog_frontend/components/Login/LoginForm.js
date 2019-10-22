import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import './LoginForm.scss';
const LoginForm = () => {
    const [username, SetUsername] = useState('');
    const [Email, SetEmail] = useState('');
    const [Password, SetPassword] = useState('');
    const [Disabled, SetDisabled] = useState(true);
    const [isLogin, SetIsLogin] = useState(true);
    useEffect(() => {
        if(Email === '' || Password === '') {
            SetDisabled(true);
        } else {
            SetDisabled(false);
        }
    },[Email, Password])
    return (
    <>
        {
            isLogin ? (
                <div className="login-form__contianer">
                    <div className="login-form__inner">
                        <h1 className="login-from__logo"><img class="login-form__logo-image" src="/static/logo.png"/></h1>
                        <div className="login">
                            <form>
                                <div className="member-input">
                                    <div className="member-input__state">
                                        <input class="member-input__box" onChange={(e) => SetEmail(e.target.value)} type="text" placeholder="Email"/>
                                    </div>
                                    <div className="member-input__state">
                                        <input class="member-input__box"  onChange={(e) => SetPassword(e.target.value)} type="text" placeholder="Password"/>
                                    </div>
                                    <button type="submit" class="member-button login__btn" disabled={Disabled}>
                                        LOGIN
                                    </button>
                                </div>
                            </form>
                            <div className="login__l-sign-up">
                                Don’t have an account?
                                <div className="login__sign-up-link" onClick={() => SetIsLogin(false)}>Sign Up</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="login-form__contianer">
                    <div className="login-form__inner">
                        <h1 className="login-from__logo"><img class="login-form__logo-image" src="/static/logo.png"/></h1>
                        <div className="login">
                            <form>
                                <div className="member-input">
                                    <div className="member-input__state">
                                        <input class="member-input__box" onChange={(e) => SetUsername(e.target.value)} type="text" placeholder="Username"/>
                                    </div>
                                    <div className="member-input__state">
                                        <input class="member-input__box" onChange={(e) => SetEmail(e.target.value)} type="text" placeholder="Email"/>
                                    </div>
                                    <div className="member-input__state">
                                        <input class="member-input__box"  onChange={(e) => SetPassword(e.target.value)} type="text" placeholder="Password"/>
                                    </div>
                                    <button type="submit" class="member-button login__btn" disabled={Disabled}>
                                        LOGIN
                                    </button>
                                </div>
                            </form>
                            <div className="login__l-sign-up">
                                Do you have an account?
                                <div className="login__sign-up-link" onClick={() => SetIsLogin(true)}>Login</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </>
    )
}

export default LoginForm;