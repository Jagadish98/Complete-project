import React from 'react'
import './ProductViewer.scss';
import thumbnail1 from '../asset/thumbnail1.jpg';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel'; 
import image1 from '../asset/1.jpg';
import image4 from '../asset/image4.jpg';
import image3 from '../asset/3.jpg';

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
                       </div>   
                    </div> 
              </div>

              <div className='sidebar'>
                    Yes ok
              </div>

            </div>
      )
}

export default ProductViewer
