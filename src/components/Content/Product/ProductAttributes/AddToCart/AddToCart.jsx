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

  &.disabled {
    color: #A6A6A6;
    background-color: rgba(166,166,166,0.2);
    border: 1px solid #A6A6A6;

    &:hover {
      cursor: default
    }
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
    this.props.sendProductToCart(this.props.product)
    this.setState({ isProceedToCheckout: true, innerText: 'proceed to checkout' })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cartItems.length !== this.props.cartItems.length) {
      !this.props.cartItems.find((el) => el.id === prevProps.id) && 
      this.setState({ isProceedToCheckout: false, innerText: 'add to cart' })
    }
  }

  componentDidMount() {
    !this.props.inStock && this.setState({ ...this.state, innerText: 'out of stock' })
  }

  render() {
    const button = !this.state.isProceedToCheckout 
      ? <StyledAddToCart 
          onClick={ this.props.inStock 
            ? (this.state.isProceedToCheckout ? () => <Navigate to='/cart' /> : this.addToCart.bind(this))
            : null
          }
          className={ !this.props.inStock ? 'disabled' : '' }
        ><span>{this.state.innerText}</span>
        </StyledAddToCart>
      : <Link to='/cart' onClick={ this.props.inStock ? () => <Navigate to='/cart' /> : null }>
          <StyledAddToCart className={ !this.props.inStock ? 'disabled' : '' }>
            <span>{this.state.innerText}</span>
          </StyledAddToCart>
        </Link> 
    return button
  }
}