import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../commons/assets/logo.png';
import {
  ButtonLogin,
  CheckboxRemember,
  GoogleLogin,
  LoginStyles,
} from '../../styles/features/loginStyles';
import GoogleIcon from '@mui/icons-material/Google';

function LoginShopComponent() {
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

      <form className={classes.loginForm} style={{ height: '44rem' }}>
        <h1 className={classes.h1Title}>SIGN IN</h1>

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
        <div className={classes.optionLogin}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <CheckboxRemember color="default" />
            <label>Remember password</label>
          </span>
          <span>
            <Link
              to="/forgot-password"
              style={{
                textDecorationLine: 'underline',
                cursor: 'pointer',
                color: 'black',
              }}
            >
              Forgot password?
            </Link>
          </span>
        </div>
        <ButtonLogin>SIGN IN</ButtonLogin>
        <GoogleLogin
          startIcon={
            <GoogleIcon
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
              }}
            />
          }
        >
          SIGN IN WITH GOOGLE
        </GoogleLogin>

        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1rem',
          }}
        >
          <Link
            to="/register"
            style={{
              textDecorationLine: 'underline',
              cursor: 'pointer',
              color: 'black',
            }}
          >
            Create a new account
          </Link>
        </span>
      </form>

      <div className={classes.bottomSide}></div>
    </div>
  );
}

export default LoginShopComponent;
