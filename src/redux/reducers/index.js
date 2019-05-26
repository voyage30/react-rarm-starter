import { combineReducers } from 'redux';

const initialState = {
    currentUser: {}
  }
  
export const login_reducer = (state = initialState, action) => {
    switch (action.type) {
    case 'LOGIN_USER':
        return {...state, currentUser: action.payload}
    default:
        return state;
    }
}

export const logout_reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return {...state, currentUser: action.payload}
      case 'LOGOUT_USER':
        return {...state, currentUser: {} }
      default:
        return state;
    }
  }

  const rootReducer = combineReducers({
    login_reducer,
    logout_reducer
  });
  
  export default rootReducer;
