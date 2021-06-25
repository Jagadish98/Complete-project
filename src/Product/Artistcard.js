import React from 'react'
import './Artistcard.scss'
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import thumbnail1 from '../asset/thumbnail1.jpg';
import { AiTwotoneStar } from 'react-icons/ai';

function Artistcard({product}) {
      const { paintingImg, description, price, title } = product;
      return (
            <div>
               <Card>
                        <Carousel showThumbs={false} dynamicHeight={false} showStatus={false}emulateTouch={true} swipeable={true} autoPlay={false}>
                         <div>
                            <img src={paintingImg.src} height= "190px" alt={`${paintingImg.title}`}/>
                         </div>
                         <div>
                            <img src={paintingImg.src} height= "190px" alt={`${paintingImg.title}`}/>
                         </div>
                         <div>
                            <img src={paintingImg.src} height= "190px" alt={`${paintingImg.title}`}/>
                         </div>
                      </Carousel>
                  <Card.Body>
                        <Card.Title>
                              <Image src={thumbnail1} roundedCircle className='user__profile' />
                              <span className='username'>Krishna</span>
                        </Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        <div className='rating__wrapper'>
                              <AiTwotoneStar color= "#ffbe5b" />
                              <span className='rating'>5.0(741)</span>
                        </div>
                        </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                      <div className='price__container'>
                        <small className="price__start">starting at</small>
                        <span>$1,924</span>
                      </div>
                  </Card.Footer>
                  </Card>   
            </div>
      )
}

export default Artistcard
