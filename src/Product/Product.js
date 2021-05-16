import React from 'react'
import './Product.scss';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import painting1 from '../asset/painting1.jpg';
import painting2 from '../asset/painting2.jpg';
import painting3 from '../asset/painting3.jpg';
import thumbnail1 from '../asset/thumbnail1.jpg';
import thumbnail2 from '../asset/thumbnail2.jpg';
import thumbnail3 from '../asset/thumbnail3.jpg';
import thumbnail4 from '../asset/thumbnail4.jpg';
import {AiTwotoneStar} from 'react-icons/ai';


function Product() {
      return (
            <div>
            <Container fluid>
             <Row>
              <Col xl={3} lg={3} md={4} sm={6} pt-2>
                  <Card>
                      <Carousel showThumbs={false} dynamicHeight={false} showStatus={false} emulateTouch={true} swipeable={true} autoPlay={false} showIndicators={true}>
                         <div>
                            <img src={painting1}  height= "190px"/>
                         </div>
                         <div>
                            <img src={painting2} height= "190px"/>
                         </div>
                         <div>
                            <img src={painting3} height= "190px"/>
                         </div>
                      </Carousel>  
                  {/* <Carousel autoplay={false}>
                     <Carousel.Item>
                        <Card.Img variant="top" src={painting1} width='297px' height='178px'/>
                     </Carousel.Item>
                     <Carousel.Item>
                         <Card.Img variant="top" src={painting2} width='297px' height='178px'/>
                     </Carousel.Item>
                     <Carousel.Item>
                          <Card.Img variant="top" src={painting3} width='297px' height='178px'/>
                     </Carousel.Item>
                  </Carousel > */}
                  <Card.Body>
                        <Card.Title>
                              <Image src={thumbnail1} roundedCircle className='user__profile' />
                              <span className='username'>John smilga</span>
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
                        <span className='price'>$1,924</span>
                      </div>
                  </Card.Footer>
                  </Card>
                  </Col>
                  <Col xl={3} lg={3} md={4} sm={6} >
                  <Card>
                        <Carousel showThumbs={false} dynamicHeight={false} showStatus={false}emulateTouch={true} swipeable={true} autoPlay={false}>
                         <div>
                            <img src={painting1} height= "190px"/>
                         </div>
                         <div>
                            <img src={painting2} height= "190px"/>
                         </div>
                         <div>
                            <img src={painting3} height= "190px"/>
                         </div>
                      </Carousel>
                  {/* <Carousel autoplay={false}>
                     <Carousel.Item>
                        <Card.Img variant="top" src={painting1} width='297px' height='178px'/>
                     </Carousel.Item>
                     <Carousel.Item>
                         <Card.Img variant="top" src={painting2} width='297px' height='178px'/>
                     </Carousel.Item>
                     <Carousel.Item>
                          <Card.Img variant="top" src={painting3} width='297px' height='178px'/>
                     </Carousel.Item>
                  </Carousel> */}
                  <Card.Body>
                        <Card.Title>
                              <Image src={thumbnail2} roundedCircle className='user__profile' />
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
                  </Col>
                  <Col xl={3} lg={3} md={4} sm={6} pt-2>
                  <Card>
                        <Carousel showThumbs={false} dynamicHeight={false} showStatus={false}emulateTouch={true} swipeable={true} autoPlay={false}>
                         <div>
                            <img src={painting1} height= "190px"/>
                         </div>
                         <div>
                            <img src={painting2} height= "190px"/>
                         </div>
                         <div>
                            <img src={painting3} height= "190px"/>
                         </div>
                      </Carousel>
                  {/* <Carousel autoplay={false}>
                     <Carousel.Item>
                        <Card.Img variant="top" src={painting1} width='297px' height='178px'/>
                     </Carousel.Item>
                     <Carousel.Item>
                         <Card.Img variant="top" src={painting2} width='297px' height='178px'/>
                     </Carousel.Item>
                     <Carousel.Item>
                          <Card.Img variant="top" src={painting3} width='297px' height='178px'/>
                     </Carousel.Item> */}
                  {/* </Carousel> */}
                  <Card.Body>
                        <Card.Title>
                              <Image src={thumbnail3} roundedCircle className='user__profile' />
                              <span className='username'>Abdul Raheman</span>
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
                  </Col>
                  <Col xl={3} lg={3} md={4} sm={6}>
                  <Card>
                        <Carousel showThumbs={false} dynamicHeight={false} showStatus={false} emulateTouch={true} swipeable={true} autoPlay={false}>
                         <div>
                            <img src={painting1} height= "190px"/>
                         </div>
                         <div>
                            <img src={painting2} height= "190px"/>
                         </div>
                         <div>
                            <img src={painting3} height= "190px"/>
                         </div>
                      </Carousel>
                  {/* <Carousel autoplay={false}>
                     <Carousel.Item>
                        <Card.Img variant="top" src={painting1} width='297px' height='178px'/>
                     </Carousel.Item>
                     <Carousel.Item>
                         <Card.Img variant="top" src={painting2} width='297px' height='178px'/>
                     </Carousel.Item>
                     <Carousel.Item>
                          <Card.Img variant="top" src={painting3} width='297px' height='178px'/>
                     </Carousel.Item>
                  </Carousel> */}
                  <Card.Body>
                        <Card.Title>
                              <Image src={thumbnail4} roundedCircle className='user__profile' />
                              <span className='username'>Ashrey</span>
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
             
              </Col>
              </Row>
              </Container>      
            </div>
      )
}

export default Product
