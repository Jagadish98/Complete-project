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


function Header(){
    const [show, setShow] = useState(true);
    const [signUp, setsignUp ] = useState(false);
    const [Isignup, setIsignup] = useState(false);
    const [login, setLogin] = useState(false);

    const toggleMenu = () => {
        console.log(show);
        setShow(!show);
    }

    const onCloseModalSignup = () => {
        setsignUp(false);
    }

    const onCloseModalIsignup = () => {
        setsignUp(false);
        setIsignup(false);
    }

    const onCloseModalLogin = () => {  
        setLogin(false);
    }

    const openModalIsignup = () => {
        setLogin(false);
        setIsignup(true);
    }

    const openModalsignUp = () => { 
        setLogin(false);
        setIsignup(false);
        setsignUp(true);
    }

    const openModalLogin = () => {
        setsignUp(false);
        setIsignup(false);
        setLogin(true);
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
              <input type="search" className='searchbar'placeholder='Search for products...'/>
              <button type='search' className='btn__search'>Search</button>
             </div>

             <div className='container'>
             <div className='cartIcon__container'>
                 <button type='button' className='cart__btn'>
              <AiOutlineShoppingCart className='cart__icon'/>
              <span>Cart</span></button>
             </div>
             
             <div className='cartIcon__container'>
              <button type='button' onClick={openModalsignUp} class='join__btn'>
              <FaUser className='cart__icon' onClick={openModalsignUp}/>
              <span>Join</span></button>
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
           <div style={{paddingBottom: '16px'}}>  
             <input type='email' className='mail__input' placeholder='Enter you email' name='email' />
           </div> 
             <button type='button' className='btn' onClick={openModalIsignup}>Continue </button>
             <p>By joining I agree to the terms and conditions of ArtisHeart</p>
         </div>
          <div className='modal__footer'>
                 <p>Already a member?</p>
                 <button className='footer__button' type='button' onClick={openModalLogin}>Sign In</button>
             </div>
        </Modal>
        {/* Intermediate Signup modal */}
        <Modal open={Isignup} onClose={onCloseModalIsignup} center>
          <div className='modal__container'> 
                <h4>Join ArtisHeart</h4> 
            <div style={{paddingBottom: '16px'}}>  
                <input type='text' className='mail__input' placeholder='Choose a Username' name='email' />
            </div> 
            <div style={{paddingBottom: '16px'}}>
                <input type='password' className='mail__input' placeholder='Choose a Password' name='email' />
            </div> 
                <button type='button' className='btn' > Join </button>
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
            <div style={{paddingBottom: '16px'}}>  
                <input type='text' className='mail__input' placeholder='Email' name='email' />
            </div> 
            <div style={{paddingBottom: '16px'}}>
                <input type='password' className='mail__input' placeholder='Password' name='email' />
            </div> 
                <button type='button' className='btn' > Log In </button>
                <button className='forget__button' type='button' >Forgot Password?</button>
          </div>   
             <div className='modal__footer'>
                 <p>Already a member?</p>
                 <button className='footer__button' type='button' onClick={openModalsignUp}>Join now</button>
             </div>
        </Modal>
      </div>
)
}

export default Header;
