import React from 'react'
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
    this.state = { innerText: 'add to cart' }
    this.productAdded = this.productAdded.bind(this)
  }

  addToCart() {
    this.props.sendProductToCart(this.props.product)
    this.productAdded()
  }

  productAdded() {
    this.setState({ innerText: 'product added' })
    setTimeout(() => this.setState({ innerText: 'add to cart' }), 1000)
  }

  componentDidMount() {
    !this.props.inStock && this.setState({ ...this.state, innerText: 'out of stock' })
  }

  render() {
    return (
      <StyledAddToCart 
        onClick={ this.props.inStock ? this.addToCart.bind(this) : null }
        className={ this.props.inStock ? '' : 'disabled' }
      >
        <span>{this.state.innerText}</span>
      </StyledAddToCart>
    )
  }
}