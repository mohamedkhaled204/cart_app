import React from 'react'
import { Container } from 'react-bootstrap'
import {Table,Button,Image} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { deletefromcart ,clear } from '../rtk/slices/Cart-slice'
function Cart() {
    console.log(clear)
    const cart=useSelector(state=>state.cart)
    const dispatch=useDispatch()
    const totalprice=cart.reduce((acc,product)=>{
        acc+=product.price*product.quantity;
        return acc
    },0)
    return (
        <Container className='mt-5'>
            <Button variant='primary' className=' mb-3 mt-5' onClick={()=>dispatch(clear())}>Clear cart</Button>
            <p>Total Price: {totalprice.toFixed(2)}</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>image</th>
                        <th>price</th>
                        <th>Quantity</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(pro=>(
                        <tr key={pro.id}>
                        <td>{pro.id}</td>
                        <td>{pro.title}</td>
                        <td><Image src={pro.image} style={{width:'100px', height:'100px' }}/></td>
                        <td>{pro.price}$</td>
                        <td>{pro.quantity}</td>
                        <td><Button variant='danger' onClick={()=>dispatch(deletefromcart(pro))}>delete</Button></td>
                    </tr>
                    ))}
                    

                </tbody>
            </Table>
        </Container>
    )
}

export default Cart