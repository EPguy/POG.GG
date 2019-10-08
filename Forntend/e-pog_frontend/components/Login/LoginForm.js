import React from 'react';

const LoginForm = () => {
    return (
    <>
        <div className="login-form__contianer">
            <div className="login-form__inner">
                <h1 className="login-from__logo"><img class="login-form__logo-image" src="/static/logo.png"/></h1>
                <div className="login">
                    <form>
                        <div className="member-input">
                            <div className="member-input__state">
                                <input class="member-input__box" type="text" placeholder="Email"/>
                            </div>
                            <div className="member-input__state">
                                <input class="member-input__box" type="text" placeholder="Password"/>
                            </div>
                            <button type="submit" class="member-button login__btn">
                                LOGIN
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <style global jsx>
            {`
                .login-form__contianer {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    margin: 0 auto;
                    width: 500px;
                    min-height: 800px;
                    
                }
                .login-form__inner {
                    width: 500px;
                    background-color: #2a2b30;
                    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
                    margin: 0 40px;
                    padding-bottom: 40px;
                }
                .login-from__logo {
                    padding-top: 48px;
                    text-align: center;
                    margin-bottom: 42px;
                }
                .login-form__logo-image {
                    width: 200px;
                    height: 100px;
                }
                .login__email-title {
                    margin-top: 42px;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                }
                .member-input {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
                .member-input__state {
                    width: 300px;
                    margin-top: 27px;
                    position: relative;
                    padding: 10px 0 11px;
                    border-bottom: 1px solid #dddfe4;
                }
                .member-input__state input{ 
                    color: white;
                }
                .member-input__box {
                    font-size: 20px;
                    color: ;
                    position: relative;
                    z-index: 10;
                    border: 0;
                    padding: 0;
                    background-color: transparent;
                    outline: 0;
                }
                .login__btn {
                    margin-top: 40px;
                    width: 300px;
                }
                .member-button {
                    position: relative;
                    font-weight: 400;
                    line-height: 19px;
                    text-align: center;
                    background-color: #1ea1f7;
                    font-weight: 700;
                    cursor: pointer;
                    line-height: 56px;
                    padding: 0 20px;
                }
            `}
        </style>
    </>
    )
}

export default LoginForm;