export const initialUser = {
  email: '',
  senha: '',
  nome: '',
  datanasc: '',
  sexo: '',
};


const user = (state = initialUser, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return state

    case 'LOGIN_FAILURE':
      return state

    case 'SIGNUP_REQUEST':
      return state

    case 'SIGNUP_FAILURE':
      return state
      

    default: return state
  }
}

export default user;