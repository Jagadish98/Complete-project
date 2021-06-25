import React,{useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../asset/1.jpg';
import image2 from '../asset/2.jpg';
import image3 from '../asset/3.jpg';
import './Home.scss'
import {useSelector, useDispatch} from 'react-redux'

function Home() {
   
      return (
            <div className="home__container">
                 <Carousel pause={true} wrap={false}>
                        <Carousel.Item>
                           
                              <img
                                    className="d-block w-100 "
                                    src={image1}
                                    height="341.5px"
                                    alt="First slide"
                              />
                        <Carousel.Caption>
                              <h3>First slide label</h3>
                              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                              className="d-block w-100 "
                              src={image2}
                              height="341.5px"
                              alt="Second slide"
                        />

                        <Carousel.Caption>
                              <h3>Second slide label</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                              className="d-block w-100 "
                              src={image3}
                              height="341.5px"
                              alt="Third slide"
                        />

                        <Carousel.Caption>
                              <h3>Third slide label</h3>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                  </Carousel>
            </div>
      )
}

export default Home
