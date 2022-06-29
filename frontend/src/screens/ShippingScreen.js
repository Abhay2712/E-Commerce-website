import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'


const ShippingScreen = ({history}) => {
    const cart=useSelector(state=>state.cart)
    const {shippingAddress}=cart
    const [address,setAddress]=useState(shippingAddress.address)
    const [city,setCity]=useState(shippingAddress.city)
    const[pincode,setPincode]=useState(shippingAddress.pincode)
    const [state,setState]=useState(shippingAddress.state)

    const dispatch=useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({address,city,pincode,state}))
        history.push('/payment')
    }

  return (
    <FormContainer>
        <CheckoutSteps step1 step2 />
        <h1>Shipping Details</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='address'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Form.Group controlId='city'>
                <Form.Label>City</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter city'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Form.Group controlId='pincode'>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter pincode'
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Form.Group className='pb-3' controlId='state'>
                <Form.Label>State</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter state'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Button  variant='primary' type='submit'>
                Continue
            </Button>
        </Form>
    </FormContainer>
  )
}

export default ShippingScreen