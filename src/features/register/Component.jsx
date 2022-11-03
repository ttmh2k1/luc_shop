import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../commons/assets/logo.png';
import { ButtonLogin, LoginStyles } from '../../styles/features/loginStyles';

function RegisterComponent() {
    const classes = LoginStyles();
    return (
        <div className={classes.root}>
            <div style={{ width: '100%', textAlign: 'center' }}>
                <img
                    src={logo}
                    alt="logo"
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        marginTop: '4rem',
                    }}
                />
            </div>

            <form className={classes.loginForm}>
                <h1 className={classes.h1Title}>SIGN UP</h1>

                <input
                    className={classes.inputText}
                    type="text"
                    id="fullname"
                    placeholder="Fullname"
                />
                <input
                    className={classes.inputText}
                    type="text"
                    id="username"
                    placeholder="Username"
                />
                <input
                    className={classes.inputText}
                    type="password"
                    id="password"
                    placeholder="Password"
                />
                <input
                    className={classes.inputText}
                    type="email"
                    id="email"
                    placeholder="Email"
                />

                <ButtonLogin>SIGN UP</ButtonLogin>

                <span
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '1rem',
                    }}
                >
                    <Link
                        to="/login"
                        style={{
                            textDecorationLine: 'underline',
                            cursor: 'pointer',
                            color: 'black',
                        }}
                    >
                        Have a account? Sign in
                    </Link>
                </span>
            </form>
            <div className={classes.bottomSide}></div>
        </div>
    );
}

export default RegisterComponent;
