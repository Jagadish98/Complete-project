import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {FaUser} from 'react-icons/fa';
import {RiMenu2Fill} from 'react-icons/ri';
import logo from '../asset/logo.png';
import './Header.scss';

function Header(){
    console.log(window.innerWidth);
    const [show, setShow] = useState(true);

    const toggleMenu = () => {
        setShow(!show);
    }

return(
      <div className="header">
            
            <div className='header__searchBar' >
            <span className='menu__icon'>    
            <RiMenu2Fill className="menu__icon" onClick={toggleMenu} />
            </span>
              <Link to='/' >     
                 <img src={logo} alt="ArtisHeart" width='140px' height='38px'/>
              </Link>
         
             <div className='search__container'>
              <input type="search" className='searchbar'placeholder='Search for products...'/>
              <button type='search' className='btn__search'>Search</button>
           
             </div>
             <div className='container'>
             <div className='cartIcon__container'>
              <AiOutlineShoppingCart className='cart__icon cart__additional'/>
              <span>Cart</span>
             </div>
             <div className='cartIcon__container'>
              <FaUser className='cart__icon' />
              <span>SignIn</span>
             </div>
             </div>
            </div>
          
        <div className='header__container'>
         <ul className='header__menu'>
          <li className="menu__user">
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
          <li>
              <Link to='/'>
                  SignUp
              </Link>
          </li>
          </ul>
       </div>

     
      </div>
)
}

export default Header;
