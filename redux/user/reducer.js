import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
} from './actions'


export const initialUser = {
  email: '',
  senha: '',
  nome: '',
  datanasc: '',
  sexo: '',
};

const merge = (prev, next) => Object.assign({}, prev, next)
// return merge(state, action.payload) in case login_success as example

const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state

    case LOGIN_FAILURE:
      return state

    case SIGNUP_REQUEST:
      return state

    case SIGNUP_FAILURE:
      return state
      

    default: return state
  }
}

export default userReducer;