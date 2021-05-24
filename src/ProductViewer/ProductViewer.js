import React from 'react'
import './ProductViewer.scss';
import thumbnail1 from '../asset/thumbnail1.jpg';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel';
import Table from 'react-bootstrap/Table'; 
import image1 from '../asset/1.jpg';
import image4 from '../asset/image4.jpg';
import image3 from '../asset/3.jpg';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {BiTime} from 'react-icons/bi';
import {BsArrowRepeat} from 'react-icons/bs';
import {FcCheckmark} from 'react-icons/fc';

function ProductViewer() {
      return (
            <div className='viewer__container'>
              
              <div className='left__container'>
                   <h1 className="work">I will draw a realistic pencil sketch, face sketch, portrait sketch </h1>
                <div className='user__info'>
                   <Image src={thumbnail1} roundedCircle className='user__profile' />
                   <span className='username'>John smilga</span>
                </div>
                    <Carousel autoPlay={false} showStatus={false} thumbWidth={50}>
                        <div className='img__container'>    
                        <img
                              className="d-block w-100 "
                              src={image1}
                              alt="First slide"
                        />
                        </div> 
                        
                        <div className='img__container'>
                        <img
                              className="d-block w-100 "
                              src={image4}
                              alt="Second slide"
                        />
                        </div>
                        
                        <div className='img__container'>
                        <img
                              className="d-block w-100 "
                              src={image3}
                              alt="Third slide"
                        />
                        </div>
                    </Carousel> 

                    <div className='gig-description'>
                          <h2 className='title'>About This Gig</h2>
                       <div className='description__wrapper'>
                        <div className='description__content'>
                              
                        </div>
                            <Table striped bordered hover>
                              <thead>
                              <tr className="package__type">
                                <th>Package</th>
                                   <td>
                                      <p>767</p>
                                      <p>Basic</p>
                                      <p>"Detailed Portrait"</p>
                                   </td>
                                   <td>
                                      <p>2299</p>
                                      <p>Standard</p>
                                      <p>"Realistic Portrait"</p>
                                   </td>
                                   <td>
                                      <p>4597</p>
                                      <p>Premium</p>
                                      <p>"Hyper Realistic"</p>
                                   </td>
                              </tr>
                              <tr className="package__type">
                                <th></th>
                                   <td>
                                     A3 size. One figure (you can add more).
                                   </td>
                                   <td>
                                      A3 size. One figure (you can add more).
                                   </td>
                                   <td>
                                      Priority work. A3 size. One figure (you can add more). Commercial Use included.
                                   </td>
                              </tr>
                              </thead>
                              <tbody>
                              <tr className="package__type">
                                <th>High Resolution</th>
                                   <td>
                                      <p>Yes</p>
                                   </td>
                                   <td>
                                      <p>Yes</p>
                                   </td>
                                   <td>
                                      <p>Yes</p>
                                   </td> 
                              </tr>
                              <tr className="package__type">
                                 <th>Commercial Use</th>
                                    <td>
                                       <p>No</p>
                                    </td>
                                    <td>
                                       <p>No</p>
                                    </td>
                                    <td>
                                       <p>Yes</p>
                                    </td>
                              </tr>
                              <tr className="package__type">
                                 <th>Figures</th>
                                    <td>
                                       <p>No</p>
                                    </td>
                                    <td>
                                       <p>No</p>
                                    </td>
                                    <td>
                                       <p>Yes</p>
                                    </td>
                              </tr>
                              <tr className="package__type">
                                 <th>Revisions</th>
                                    <td>
                                       <p>No</p>
                                    </td>
                                    <td>
                                       <p>No</p>
                                    </td>
                                    <td>
                                       <p>Yes</p>
                                    </td>
                              </tr>
                              <tr className="package__type">
                                 <th>Delivery Time</th>
                                    <td>
                                       <p>No</p>
                                    </td>
                                    <td>
                                       <p>No</p>
                                    </td>
                                    <td>
                                       <p>Yes</p>
                                    </td>
                              </tr>
                              </tbody>
                           </Table>
                       </div>   
                    </div> 
              </div>

              <div className='sidebar'>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className='tab__style'>
                  
                  <Tab eventKey="home" title="Home" className='tabs'>
                   <div className='content'>
                      <h3>
                         <b>Burst up color</b>
                         <span className='price'>$766</span>
                      </h3>
                      <p>- bust up/headshot drawing - simple background - color </p>
                      <div className='content__info'>
                         <div className='content__infoOne'>
                            <BiTime className='icon'/>
                            <b className='icon__info'>3 Days Delivery</b>
                         </div>
                         <div className='content__infoOne'>
                            <BsArrowRepeat  className='icon' />
                            <b className='icon__info'>2 Revisions</b>
                         </div>
                      </div>
                      <div className='features'>
                         <ul>
                            <li>
                              <FcCheckmark className='tick__icon'/> 1 Figure
                            </li>
                            <li>
                              <FcCheckmark className='tick__icon'/> High Resolution
                            </li>
                            <li>
                              <FcCheckmark className='tick__icon'/> Color
                            </li>
                            <li>
                              <FcCheckmark className='tick__icon'/> Commercial Use
                            </li>
                         </ul>
                      </div>
                      <div className='content__footer'>
                         <button type='button' className='continue'>Continue($766)</button>
                         <button type='button' className='compare'>Compare Packages</button>
                      </div>
                   </div>
                  </Tab>
               
                  
                  <Tab eventKey="profile" title="Profile">
                   <div className='content'>
                      <h3>
                         <b>Burst up color</b>
                         <span className='price'>$766</span>
                      </h3>
                      <p>- bust up/headshot drawing - simple background - color </p>
                      <div className='content__info'>
                         <div className='content__infoOne'>
                            <BiTime className='icon'/>
                            <b className='icon__info'>3 Days Delivery</b>
                         </div>
                         <div className='content__infoOne'>
                            <BsArrowRepeat  className='icon' />
                            <b className='icon__info'>2 Revisions</b>
                         </div>
                      </div>
                      <div className='features'>
                         <ul>
                            <li>
                              <FcCheckmark className='tick__icon'/> 1 Figure
                            </li>
                            <li>
                              <FcCheckmark className='tick__icon'/> High Resolution
                            </li>
                            <li>
                              <FcCheckmark className='tick__icon'/> Color
                            </li>
                            <li>
                              <FcCheckmark className='tick__icon'/> Commercial Use
                            </li>
                         </ul>
                      </div>
                      <div className='content__footer'>
                         <button type='button' className='continue'>Continue($766)</button>
                         <button type='button' className='compare'>Compare Packages</button>
                      </div>
                   </div>
                  </Tab>
                 
                 
                  <Tab eventKey="contact" title="Contact" >
                <div className='content'>
                      <h3>
                         <b>Burst up color</b>
                         <span className='price'>$766</span>
                      </h3>
                      <p>- bust up/headshot drawing - simple background - color </p>
                      <div className='content__info'>
                         <div className='content__infoOne'>
                            <BiTime className='icon'/>
                            <b className='icon__info'>3 Days Delivery</b>
                         </div>
                         <div className='content__infoOne'>
                            <BsArrowRepeat  className='icon' />
                            <b className='icon__info'>2 Revisions</b>
                         </div>
                      </div>
                      <div className='features'>
                         <ul>
                            <li>
                              <FcCheckmark className='tick__icon'/> 1 Figure
                            </li>
                            <li>
                              <FcCheckmark className='tick__icon'/> High Resolution
                            </li>
                            <li>
                              <FcCheckmark className='tick__icon'/> Color
                            </li>
                            <li>
                              <FcCheckmark className='tick__icon'/> Commercial Use
                            </li>
                         </ul>
                      </div>
                      <div className='content__footer'>
                         <button type='button' className='continue'>Continue($766)</button>
                         <button type='button' className='compare'>Compare Packages</button>
                      </div>
                   </div>
                  </Tab>
                </Tabs>
              </div>

            </div>
      )
}

export default ProductViewer
