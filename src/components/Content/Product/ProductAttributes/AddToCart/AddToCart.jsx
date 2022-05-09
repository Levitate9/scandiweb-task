import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'

const StyledAddToCart = styled.button`
  width: 292px;
  height: 52px;
  margin: 0 0 20px 0;
  padding: 16px 32px;
  text-transform: uppercase;
  border: none;
  color: #ffffff;
  background-color: #5ECE7B;

  &:hover {
    cursor: pointer;
  }

  & a {
    text-decoration: none;
    color: #ffffff;

    & span {
      width: 292px;
      height: 52px;
    }
  }



  & span {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
`

export default class AddToCart extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      isProceedToCheckout: false,
      innerText: 'add to cart'
     }
  }
  addToCart() {
<<<<<<< HEAD
    this.props.sendProductToCart(this.props.id)
=======
    //adToCart method
>>>>>>> bd99f27c27aec3948d163167bd3966c930dac595
    this.setState({ isProceedToCheckout: true, innerText: 'proceed to checkout' })
  }

  proceedToCheckout() {
    <Navigate to='/cart'/>
  }

  render() {
    const button = !this.state.isProceedToCheckout 
      ? <StyledAddToCart 
<<<<<<< HEAD
          onClick={this.state.isProceedToCheckout ? () => <Navigate to='/cart' /> : this.addToCart.bind(this)}
        ><span>{this.state.innerText}</span>
=======
      onClick={this.state.isProceedToCheckout ? () => <Navigate to='/cart' /> : this.addToCart.bind(this)}>
          <span>{this.state.innerText}</span>
>>>>>>> bd99f27c27aec3948d163167bd3966c930dac595
        </StyledAddToCart>
      : <Link to='/cart'>
          <StyledAddToCart>
            <span>{this.state.innerText}</span>
          </StyledAddToCart>
        </Link> 
    return button
  }
}