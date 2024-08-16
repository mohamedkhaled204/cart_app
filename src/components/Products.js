import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import { fetchproduct } from '../rtk/slices/Products-slice';
import { useSelector,useDispatch } from 'react-redux';
import '../styling/textoverflow.css'
import { addtocart } from '../rtk/slices/Cart-slice';
function Products() {
    const products = useSelector(state => state.product)
    const dispatch=useDispatch()
    console.log(products)
    useEffect(() => {
        dispatch(fetchproduct())
    },[]);
    return (
        <Container className='py-5'>
            <Row className='py-5'>
                {products.map(pro => (
                    <Col key={pro.id} className='my-5 '>
                        <Card style={{ width: '18rem' }} className='py-3 px-3'>
                            <Card.Img variant="top" style={{height:'250px'}} src={pro.image} />
                            <Card.Body>
                                <Card.Title className='limited-text'>{pro.title}</Card.Title>
                                <Card.Text >
                                    {pro.price}$
                                </Card.Text>
                                <Button variant="primary" onClick={()=>dispatch(addtocart(pro))}>Add To Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

            </Row>
        </Container>
    )
}

export default Products