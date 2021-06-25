import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fetchProductStart } from '../redux/Products/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Productcard from './Productcard';
import Artistcard from './Artistcard';

const mapState = ({ productData }) => ({
   products: productData.products 
})

function Product() {

   useEffect(() => {
      dispatch(fetchProductStart());
   }, [])
   
   const dispatch = useDispatch();
   const { products } = useSelector(mapState);
       
       return(
         <Container fluid >
               <Row>
                  {products?.map(product => {
                     return(
                        <Col xl={3} lg={3} md={6} sm={6} >
                           <Productcard product={product} />
                        </Col>
                     )
                  })}  
               </Row>
               <Row>
                  {products?.map(product => {
                     return(
                        <Col xl={3} lg={3} md={6} sm={6} >
                           <Artistcard product={product} />
                        </Col>
                     )
                  })}
               </Row>
         </Container>
   );
}

export default Product
