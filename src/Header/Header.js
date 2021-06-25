import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {FaUser} from 'react-icons/fa';
import {RiMenu2Fill} from 'react-icons/ri';
import logo from '../asset/logo.png';
import './Header.scss';
import Fuse from "fuse.js";
import SearchBar from 'fuse.js'
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { signinWithGoogle, auth} from '../firebase/utils';
import {useSelector, useDispatch} from 'react-redux';
import {signinUser, signupUser, resetPassword, resetForms} from '../redux/User/userActions';
import {setSearchData} from '../redux/Products/productActions'
import {useHistory} from 'react-router-dom';
import {ReactSearchAutocomplete} from 'react-search-autocomplete'

const mapState = ({user, productData }) => {
   
    return ({ 
    isLogged: user.isLogged, 
    signinSuccess: user.signinSuccess,
    signupSuccess: user.signupSuccess,
    forgotPasswordSuccess: user.forgotPasswordSuccess,
    signupError: user.signupError,
    signinError: user.signinError,
    resetPasswordError: user.resetPasswordError,
    currentUser : user.currentUser,
    products : productData.products
 })};

function Header(){
   
    const [show, setShow] = useState(true);
    const [signUp, setsignUp ] = useState(false);
    const [login, setLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [forgotPassword, setforgotPassword] = useState('');
    const [success, setSuccess] = useState('');
    const {isLogged, signinSuccess, signupSuccess, forgotPasswordSuccess, signupError, signinError, resetPasswordError, currentUser, products} = useSelector(mapState);
    const dispatch = useDispatch();
    const history = useHistory();
    const items = products;

    const handleOnSelect = (item) => {
        console.log(item)
        history.push('/search')
        dispatch(setSearchData(item))
    }

    const onCloseModalLogin = () => {  
        setLogin(false);
    }


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

    const toggleMenu = () => {
        setShow(!show);
    }
   
    const onCloseModalSignup = () => {
        setsignUp(false);
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
                    <ReactSearchAutocomplete 
                        items={items}
                        onSelect={handleOnSelect}
                        fuseOptions={{ keys: ["title"] }} 
                        resultStringKeyName = "title"
                        styling={{ zIndex: 2, height: "34px", 
                            width: "43vw",
                            borderRight: 0,
                            padding: "0.1rem 0.7rem",
                            fontSize: "0.9rem",
                            outline: "none",
                            color: "rgb(152, 152, 152)",
                            backgroundColor: "rgb(255, 255, 255)",
                            border: "1px solid rgb(38, 199, 116)",
                            }}
                        autoFocus
                        />
             </div>

            <div className='container'>             
                    
                <div className='cartIcon__container'>
                    <button type='button' className='cart__btn'>
                    <AiOutlineShoppingCart className='cart__icon'/>
                    <span>Cart</span></button>
                </div>
                
                <div className='cartIcon__container'>
                
                        { isLogged && (
                            <>
                        <button type='button' className='join__btn' onClick={openModalLogin}>
                            <FaUser className='cart__icon' />
                            <span  onClick={() => auth.signOut()}>Sign out</span>
                        </button>
                            </>
                        ) }
                        {!isLogged && (
                            <>
                        <button type='button' onClick={openModalLogin} className='join__btn'>
                        <FaUser className='cart__icon' />
                        <span>Sign In</span>
                        </button>
                            </>
                        )}
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
                    <Link to='/admin'>
                        Gift Packs
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Become a Seller
                    </Link>
                </li>
                <li>
                    <Link to='/payment'>
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
        <Modal open={login} onClose={onCloseModalLogin} center>
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

export default Header;
