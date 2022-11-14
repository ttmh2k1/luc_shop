import cookies from 'react-cookies';
const initState = {
  user: cookies.load('user'),
  email: cookies.load('email'),
  phone: cookies.load('phone'),
  otp: cookies.load('otp'),
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'USER_LOGOUT':
      return {
        ...state,
        user: null,
      };
    case 'RESET_PASSWORD':
      return {
        ...state,
        email: action.email,
        phone: action.phone,
      };
    case 'VERIFY':
      return {
        ...state,
        otp: action.otp,
      };

    default:
      return state;
  }
};

export default userReducer;
