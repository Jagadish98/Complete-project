import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { signinWithGoogle, auth} from '../firebase/utils';
import {signinUser, signupUser, resetPassword, resetForms, setOpenModalLogin, resetOpenModalLogin} from '../redux/User/userActions';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const mapState = ({user}) => {
    return ({ 
    isLogged: user.isLogged, 
    signinSuccess: user.signinSuccess,
    signupSuccess: user.signupSuccess,
    forgotPasswordSuccess: user.forgotPasswordSuccess,
    signupError: user.signupError,
    signinError: user.signinError,
    resetPasswordError: user.resetPasswordError,
    currentUser : user.currentUser,
    openLoginModal : user.openLoginModal
 })};

function Modals() {
       
       const dispatch = useDispatch();
       const [signUp, setsignUp ] = useState(false);
       const [login, setLogin] = useState(false);
       const [forgotPassword, setforgotPassword] = useState('');
       const [success, setSuccess] = useState('');
       const {isLogged, signinSuccess, signupSuccess, forgotPasswordSuccess, signupError, signinError, resetPasswordError, currentUser, openLoginModal} = useSelector(mapState);
       const [email, setEmail] = useState('');
       const [username, setUsername] = useState('');
       const [password, setPassword] = useState('');
       console.log('openLoginModal is', openLoginModal)
      useEffect(() => {
        
        if(signinSuccess){
            dispatch(resetForms())
            onCloseModalLogin();
          }
        if(signupSuccess){
             dispatch(resetForms())
             onCloseModalSignup();
        }
        if(forgotPasswordSuccess){
             dispatch(resetForms())
             onCloseModalForgotPassword();
             openModalSuccess();
        }  
    }, [signinSuccess, signupSuccess, forgotPasswordSuccess]);

            const onCloseModalSignup = () => {
                  setsignUp(false);
            }

            const onCloseModalLogin = () => {  
                  dispatch(resetOpenModalLogin());
            }
                  
            const reset = () => {
                  setUsername('');
                  setEmail('');
                  setPassword('');
            }

            const onCloseModalForgotPassword = () => {
                  setforgotPassword(false);
            }

            const openModalsignUp = () => { 
                  dispatch(resetOpenModalLogin())
                  setforgotPassword(false);
                  setSuccess(false);
                  setsignUp(true);
            }

            const openModalLogin = () => {
                  setsignUp(false);
                  setforgotPassword(false);
                  setSuccess(false);
                  dispatch(setOpenModalLogin())
            }

            const openModalForgotPassword = () => {
                  dispatch(resetOpenModalLogin());
                  setforgotPassword(true);
            }
            
            const openModalSuccess = () => {
                  setforgotPassword(false);
                  setSuccess(true);
            }

            const closeModalSuccess = () => {
                  setSuccess(false);
            }

        const handleFormSubmitSignup = event => {
        event.preventDefault();
        dispatch(signupUser({email, password, username}));
        }

        const handleFormSubmitLogin = event => {
        event.preventDefault();
        dispatch(signinUser({email, password}));
        }

        const handleFormSubmitForgotPassword = event => {
        event.preventDefault();
        dispatch(resetPassword({email}));
        }


      return (
            <div>
                  {/* Signup modal */}
        <Modal open={signUp} onClose={onCloseModalSignup} className='modal' center>
         <div className='modal__container'> 
             <h4>Join ArtisHeart</h4> 
            <button type='button' className='btn' onClick={signinWithGoogle}>Continue with Goolge</button>
            <button type='button' className='btn' >Continue with Facebook</button>
            <button type='button' className='btn'>Continue with Apple</button>
             <div className='or'>OR</div>
             
             <form onSubmit={handleFormSubmitSignup}>
                 {signupError.length > 0 && (
                     <small>{signupError}</small>
                 )}
                <div style={{paddingBottom: '16px'}}>  
                    <input type='email' className='mail__input' placeholder='Enter you email' name='email'onChange={e => setEmail(e.target.value)}/>
                </div> 
                <div style={{paddingBottom: '16px'}}>  
                    <input type='text' className='mail__input' placeholder='Choose a Username' name='username' onChange={e => setUsername(e.target.value)} />
                </div> 
                <div style={{paddingBottom: '16px'}}>
                    <input type='password' className='mail__input' placeholder='Choose a Password' name='password' onChange={e => setPassword(e.target.value)} />
                </div> 
                    <button type='submit' className='btn' >Sign up </button>
            </form> 
             <p>By joining I agree to the terms and conditions of ArtisHeart</p>
         </div>
          <div className='modal__footer'>
                 <p>Already a member?</p>
                 <button className='footer__button' type='button' onClick={openModalLogin}>Sign In</button>
             </div>
        </Modal>
       
        {/* Login modal */}
        <Modal open={openLoginModal} onClose={onCloseModalLogin} center>
          <div className='modal__container'> 
                <h4>SignIn to ArtisHeart</h4> 
              <button type='button' className='btn' onClick={signinWithGoogle}>Sign In with Goolge</button>
              <button type='button' className='btn'>Sign In with Facebook</button>
              <button type='button' className='btn' >Sign In with Apple</button>
             <div className='or'>OR</div>
             <form onSubmit={handleFormSubmitLogin}>
                 {signinError.length > 0 && (<small>{signinError}</small>) }
                <div style={{paddingBottom: '16px'}}>  
                    <input type='email' className='mail__input' placeholder='Email' name='email' onChange={e => setEmail(e.target.value)}/>
                </div> 
                <div style={{paddingBottom: '16px'}}>
                    <input type='password' className='mail__input' placeholder='Password' name='password' onChange={e => setPassword(e.target.value)} />
                </div> 
                    <button type='submit' className='btn' > Log In </button>
            </form>
                <button className='forget__button' type='button' onClick={openModalForgotPassword}>Forgot Password?</button>
                <p>By Signing In I agree to the terms and conditions of ArtisHeart</p>
          </div>   
             <div className='modal__footer'>
                 <p>Not a member yet?</p>
                 <button className='footer__button' type='button' onClick={openModalsignUp}>Join now</button>
             </div>
        </Modal>

        <Modal open={success} onClose={closeModalSuccess} center >
          <div className='modal__container'>
              <h4>Password Reset link Sent</h4>
              <div className='modal__footer'>
                 <button className='footer__button' type='button' onClick={openModalLogin}>Back to Login</button>
              </div>
          </div>
        </Modal>

        <Modal open={forgotPassword} onClose={onCloseModalForgotPassword} center>
            <div className='modal__container'>
                <h4>Forgot Password ?</h4>
                 <form onSubmit={handleFormSubmitForgotPassword}>
                    {resetPasswordError.length > 0 && (<small>{resetPasswordError}</small>)}
                    <div style={{paddingBottom: '16px'}}>  
                        <input type='email' className='mail__input' placeholder='Email' name='email' onChange={e => setEmail(e.target.value)}/>
                    </div> 
                    <button type='submit' className='btn'> Submit </button>
                 </form>
                <p>After submitting a Password reset link will be sent to mail id</p>
                <div className='modal__footer'>
                 <button className='footer__button' type='button' onClick={openModalLogin}>Back to Login</button>
                </div>
            </div>
        </Modal>   
            </div>
      )
}

export default Modal
