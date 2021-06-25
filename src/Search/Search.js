import React from 'react'
import {useSelector} from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Productcard from '../Product/Productcard';

const mapState = ({productData}) => ({
      searchData : productData.searchData
})

function Search() {
      const {searchData} = useSelector(mapState);
      if(searchData === null) return null;
      console.log(searchData)
      return (   
         <Container fluid >
               <Row style={{marginTop : '25px'}}>
                        <Col xl={3} lg={3} md={6} sm={6} >
                           <Productcard product={searchData} />
                        </Col>
               </Row>
         </Container>   
      )
}

export default Search
