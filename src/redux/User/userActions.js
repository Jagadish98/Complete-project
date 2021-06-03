import {auth, handleUserProfile} from '../../firebase/utils';

const userTypes = {
      SET_CURRENT_USER : 'SET_CURRENT_USER',
      SIGN_IN_SUCCESS : 'SIGN_IN_SUCCESS',
      SIGN_UP_SUCCESS : 'SIGN_UP_SUCCESS',
      FORGOT_PASSWORD_SUCCESS : 'FORGOT_PASSWORD_SUCCESS',
      SIGNUP_ERROR : 'SIGNUP_ERROR',
      SIGNIN_ERROR : 'SIGNIN_ERROR',
      RESET_PASSWORD_ERROR : 'RESET_PASSWORD_ERROR',
      RESET_AUTH_FORMS : 'RESET_AUTH_FORMS'
}

export const setCurrentUser = (user) => ({
      type: userTypes.SET_CURRENT_USER,
      payload: {
            currentUser:user.currentUser,
            isLogged: user.isLogged
      }
});

export const signinUser = ({email, password}) => async dispatch => {
      try{
            await auth.signInWithEmailAndPassword(email, password);
            dispatch({
                  type : userTypes.SIGN_IN_SUCCESS,
                  payload : true
            });
      }catch(err){
            dispatch({
                  type: userTypes.SIGNIN_ERROR,
                  payload: err.message
            });
      }
}

export const signupUser = ({email, password, username}) => async dispatch => {
      try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await handleUserProfile(user, {username});
            dispatch({
                  type : userTypes.SIGN_UP_SUCCESS,
                  payload : true
            });
      }catch(err){
            console.log(err);
            dispatch({
                  type: userTypes.SIGNUP_ERROR,
                  payload: err.message
            });
      }
}

export const resetPassword = ({email}) => async dispatch => {
      const config = {
            url : 'http://localhost:3000/'
      }
      try{
            await auth.sendPasswordResetEmail(email, config);
            dispatch({
                  type: userTypes.FORGOT_PASSWORD_SUCCESS,
                  payload: true
            })
      }catch(err){
            dispatch({
                  type: userTypes.RESET_PASSWORD_ERROR,
                  payload: err.message
            })
      }
}

export const resetForms = () => ({
      type: userTypes.RESET_AUTH_FORMS
})

export default userTypes;
