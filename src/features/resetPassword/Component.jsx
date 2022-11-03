import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../commons/assets/logo.png';
import { ButtonLogin, LoginStyles } from '../../styles/features/loginStyles';

function ResetPasswordComponent() {
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

            <form className={classes.loginForm} style={{ height: '32rem' }}>
                <h1 className={classes.h1Title} style={{ fontSize: '3.2rem' }}>
                    RESET PASSWORD
                </h1>

                <input
                    className={classes.inputText}
                    type="newpassword"
                    id="newpassword"
                    placeholder="New password"
                />
                <input
                    className={classes.inputText}
                    type="confirmpassword"
                    id="confirmpassword"
                    placeholder="Confirm password"
                />

                <ButtonLogin>SAVE</ButtonLogin>

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
                        Go back to sign in
                    </Link>
                </span>
            </form>
            <div className={classes.bottomSide}></div>
        </div>
    );
}

export default ResetPasswordComponent;
