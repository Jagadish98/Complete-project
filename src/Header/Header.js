import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {FaUser} from 'react-icons/fa';
import {RiMenu2Fill} from 'react-icons/ri';
import logo from '../asset/logo.png';
import './Header.scss';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import {handleUserProfile, signinWithGoogle} from '../firebase/utils';
import {auth} from '../firebase/utils';


function Header({ currentUser }){
    const [show, setShow] = useState(true);
    const [signUp, setsignUp ] = useState(false);
    const [login, setLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [messagesSignup, setMessagesSignup] = useState([]);
    const [messagesLogin, setMessagesLogin] = useState([]);
    const [messagesResetPassword, setMessagesResetPassword] = useState([]);
    const [forgotPassword, setforgotPassword] = useState('');
    const [success, setSuccess] = useState('false');

    const toggleMenu = () => {
        console.log(show);
        setShow(!show);
    }

    const onCloseModalSignup = () => {
        setsignUp(false);
    }

    const onCloseModalLogin = () => {  
        setLogin(false);
    }

    const onCloseModalForgotPassword = () => {
        setforgotPassword(false);
    }

    const openModalsignUp = () => { 
        setLogin(false);
        setforgotPassword(false);
        setSuccess(false);
        setsignUp(true);
    }

    const openModalLogin = () => {
        setsignUp(false);
        setforgotPassword(false);
        setSuccess(false);
        setLogin(true);
    }

    const openModalForgotPassword = () => {
        setLogin(false);
        setforgotPassword(true);
    }
    
    const openModalSuccess = () => {
         setforgotPassword(false);
        setSuccess(true);
    }

    const closeModalSuccess = () => {
        setSuccess(false);
    }

    const reset = () => {
        setUsername('');
        setEmail('');
        setPassword('');
        setMessagesLogin('');
        setMessagesResetPassword('');
        setMessagesSignup('');
    }

    const handleFormSubmitSignup = async event => {
        event.preventDefault();

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            console.log(user);
            await handleUserProfile(user, {username});
            reset();
            onCloseModalSignup();
        }catch(err){
          setMessagesSignup(err.message);
        }
    }

    const handleFormSubmitLogin = async event => {
        event.preventDefault();

        try{
            const { user } = await auth.signInWithEmailAndPassword(email, password);
            console.log(user);
            reset();
            onCloseModalLogin();
        }catch(err){
          setMessagesLogin(err.message);
        }
    }
 
    const handleFormSubmitForgotPassword = async event => {
        event.preventDefault();
       
        const config = {
            url : 'http://localhost:3000/'
        }
        await auth.sendPasswordResetEmail(email, config)
                  .then(() =>{ 
                    reset();
                    onCloseModalForgotPassword();
                    openModalSuccess();
                })
                  .catch((err)=>{
                     setMessagesResetPassword(err.message);
                  })
    }

return(
      <div className="header">
            
            <div className='header__searchBar' >

              <button type="button" className='menu__button' onClick={toggleMenu}>   
                 <RiMenu2Fill className="menu__icon"  />
              </button> 
              <Link to='/' >     
                 <img src={logo} alt="ArtisHeart" width='140px' height='38px'/>
              </Link>
         
             <div className='search__container'>
              <input type="search" className='searchbar'placeholder='Search for products...' />
              <button type='search' className='btn__search'>Search</button>
             </div>

             <div className='container'>
             <div className='cartIcon__container'>
                 <button type='button' className='cart__btn'>
              <AiOutlineShoppingCart className='cart__icon'/>
              <span>Cart</span></button>
             </div>
             
             <div className='cartIcon__container'>
             
              { currentUser && (
                  <>
            <button type='button' class='join__btn'>
                <FaUser className='cart__icon' />
                <span  onClick={() => auth.signOut()}>Sign out</span>
             </button>
                  </>
              ) }
              {! currentUser && (
                  <>
            <button type='button' onClick={openModalLogin} class='join__btn'>
              <FaUser className='cart__icon' />
              <span>Sign In</span>
            </button>
                  </>
              )
            }
             </div>
            
             </div>

            </div>
          
        <div className={show ? 'header__container': 'hidden'}>
         <ul>
          <li>
              <div className="menu__guest">
                 <FaUser className='cart__icon' />
              </div>
              <div className='guest'>
              <p>Hi Guest</p>
              <p>Login</p> 
              </div>
          </li>   
          <li>
              <Link to='/'>
              Home
              </Link>
          </li>
          <li > 
              <Link to='/'>
                  Gift Packs
              </Link>
          </li>
          <li>
              <Link to='/'>
                  Become a Seller
              </Link>
          </li>
          <li>
              <Link to='/'>
                  Blog
              </Link>
          </li>  
        </ul>
       </div>
        {/* Signup modal */}
        <Modal open={signUp} onClose={onCloseModalSignup} className='modal' center>
         <div className='modal__container'> 
             <h4>Join ArtisHeart</h4> 
            <button type='button' className='btn' onClick={signinWithGoogle}>Continue with Goolge</button>
            <button type='button' className='btn' >Continue with Facebook</button>
            <button type='button' className='btn'>Continue with Apple</button>
             <div className='or'>OR</div>
             
             <form onSubmit={handleFormSubmitSignup}>
                 {messagesSignup.length > 0 && (
                <small>{messagesSignup}</small>
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
        <Modal open={login} onClose={onCloseModalLogin} center>
          <div className='modal__container'> 
                <h4>SignIn to ArtisHeart</h4> 
              <button type='button' className='btn' onClick={signinWithGoogle}>Sign In with Goolge</button>
              <button type='button' className='btn'>Sign In with Facebook</button>
              <button type='button' className='btn' >Sign In with Apple</button>
             <div className='or'>OR</div>
             <form onSubmit={handleFormSubmitLogin}>
                 {messagesLogin.length>0 && <small>{messagesLogin}</small>}
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

        <Modal open={forgotPassword} onClose={closeModalSuccess} center>
            <div className='modal__container'>
                <h4>Forgot Password ?</h4>
                 <form onSubmit={handleFormSubmitForgotPassword}>
                     {messagesResetPassword.length > 0 && <small>{messagesResetPassword}</small>}
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

export default Header;
