import actions from './actions';
import moment from 'moment';

const initialState = {
  token: null,
  error: {
    message: '',
    status: false
  },
  expiresAt: moment()
    .add(3, 's')
    .toDate()
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH:
      return { ...state, token: action.auth.token };
    case actions.AUTH_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default Auth;
