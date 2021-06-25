import React from 'react'
import Card from 'react-bootstrap/Card'
import './Productcard.scss'
// import Image from 'react-bootstrap/Image'

function Productcard({product}) {
      const { paintingImg, description, price, title } = product;
      return (
            <div>
                <Card style={{ height: '100vh' }} >
                        <div className="img__container">
                           <div className='frame'>
                              <img src={paintingImg.src} className='img__style' alt={`${paintingImg.title}`} />
                           </div>
                        </div>
                        <Card.Body>
                           <Card.Title>
                              {/* <Image src={thumbnail1} roundedCircle className='user__profile' />
                              <span className='username'>John smilga</span> */}
                              <h1>{title}</h1>
                           </Card.Title>
                           <Card.Text>
                             <h3>{description}</h3>
                           </Card.Text>
                           {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        <Card.Footer>
                           <div className='price__container'>
                              <small className="price__start">starting at</small>
                              <span className='price__numeric'>{price}</span>
                           </div>
                        </Card.Footer>
                     </Card>    
            </div>
      )
}

export default Productcard
