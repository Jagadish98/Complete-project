import userTypes from './userActions';

const initialState = {
      currentUser: null,
      isLogged: false,
      signinSuccess: false,
      signupSuccess: false,
      forgotPasswordSuccess: false,
      signupError: [],
      signinError: [],
      resetPasswordError: [],
}

export const userReducer = (state=initialState, action) => {
      
      switch(action.type){
            case userTypes.SET_CURRENT_USER:
              return {
                    ...state, 
                    currentUser:action.payload.currentUser, 
                    isLogged:action.payload.isLogged
                  };

            case userTypes.SIGN_IN_SUCCESS:
              return {
                    ...state,
                    signinSuccess: action.payload
              };          

            case userTypes.SIGN_UP_SUCCESS:
              return {
                    ...state,
                    signupSuccess: action.payload
              } 
              
            case userTypes.FORGOT_PASSWORD_SUCCESS:
                  return{
                        ...state,
                        forgotPasswordSuccess: action.payload
                  }

            case userTypes.SIGNUP_ERROR:
                  return{
                        ...state,
                        signupError: action.payload
                  }

            case userTypes.SIGNIN_ERROR:
                  return{
                        ...state,
                        signinError: action.payload
                  }

            case userTypes.RESET_PASSWORD_ERROR:
                  return{
                        ...state,
                        resetPasswordError: action.payload
                  }
                  
            case userTypes.RESET_AUTH_FORMS:
                  console.log("RESETFORM is CALLED")
                  return{
                        ...state,
                        signinSuccess: false,
                        signupSuccess: false,
                        forgotPasswordSuccess: false,
                        signupError: [],
                        signinError: [],
                        resetPasswordError: [],
                  }

            default:
              return state;    
      }

}
