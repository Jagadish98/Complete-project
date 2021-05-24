import React from 'react';
import {Link} from 'react-router-dom';
import './Checkout.scss';
import logo from '../asset/logo.png';
import {MdNavigateNext} from 'react-icons/md';
import {AiTwotoneStar} from 'react-icons/ai';
import painting3 from '../asset/painting3.jpg';

function Checkout() {
      return (
            <div className='checkout'>
              
               <div className='checkout__header'>
                  <Link to='/checkout' >
                  <img src={logo} alt="ArtisHeart" className='site__logo' width='140px' height='38px'/>
                </Link>
           
                  <div className='nav__container'>
                <ul>
                  <li>
                    <span className='number'>1</span>
                    <span className='nav__heading'>Order Details</span>
                    <MdNavigateNext className='nav__arrow'/>
                  </li>
                  <li>
                    <span className='number'>2</span>
                    <span className='nav__heading'>Confirm & Pay</span>
                    <MdNavigateNext className='nav__arrow'/>
                  </li>
                  <li>
                    <span className='number'>3</span>
                    <span className='nav__heading'>Submit Requirements</span>
                  </li>
                </ul>
              </div>
               </div>
                <div className="container">
               <div className='main__content'>
                 <h3 className='main__title'>Your Package</h3>

                <div className='checkoutProduct'>
                 <div className='sectionOne'> 
                  <div className='checkoutProduct__image'>
                  <img  src={painting3} width='150px' height='93px'/>
                  </div>

                  <div className='checkoutProduct__info'>
                    
                    <div className='checkoutProduct__rating'>
                      <p className='checkoutProduct__title'>I will draw anime art commissions</p>
                      {Array(5).fill().map((_, i)=>(<AiTwotoneStar color= "#ffbe5b" />))
                        }
                      <span className='rating__number'>5</span>
                      <span className='rating__reviews'>(18 reviews)</span>
                    </div>      
                  </div>
                  </div>
                  <div className='pricing'>
                      <label for='quantity'>
                        Qty
                      </label>
                      <select name='quantity' id='quantity'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                        <option value='11'>11</option>
                        <option value='12'>12</option>
                        <option value='13'>13</option>
                        <option value='14'>14</option>
                        <option value='15'>15</option>
                        <option value='16'>16</option>
                        <option value='17'>17</option>
                        <option value='18'>18</option>
                        <option value='19'>19</option>
                        <option value='20'>20</option>
                      </select>
                      <span className='price'>$765.39</span>
                    </div>
                </div>

               </div>
            
               <div className='subtotal'>
                 <h6>Summary</h6>
                 <div className='subtotal__summary'>
                   <span>Subtotal</span>
                   <spaan>$768.39</spaan>
                 </div>
                 <div className='subtotal__summary'>
                   <span>Service Fee</span>
                   <spaan>$195.18</spaan>
                 </div>
                 <div className='subtotal__summarySeparator'>
                   <span>Total</span>
                   <spaan>$960.57</spaan>
                 </div>
                 <div className='subtotal__summary'>
                   <span>Delivery Time</span>
                   <spaan>3 days</spaan>
                 </div>
                 <div className='payment__area'>
                 <button type='button' className='btn'>Continue to checkout</button>
                 <p className='subtotal__info'>You won't be charged yet</p>
                 </div>
               </div>

               </div>
            </div>
      )
}

export default Checkout
