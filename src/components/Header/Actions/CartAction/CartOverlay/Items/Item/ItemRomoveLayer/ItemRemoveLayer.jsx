import React from 'react'
import styled from 'styled-components'

const StyledItemRemoveLayer = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  background-color: #1D1F22;
  color: #ffffff;
  opacity: 0.8;
  z-index: 2;

  &.delete {
    display: flex;
    height: 190px;

    &.twoAttr {
      height: 202px;
    }

    &.threeAttr {
      height: 256px;
    }
  }
`

const Text = styled.span`
  margin: 10px;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  opacity: 1;

  & span {
    font-weight: 500;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & button {
    width: 80px;
    height: 30px;
    margin: 0 10px 0 0;
    background-color: #ffffff;
    opacity: 1 !important;
    border-radius: 3px;
    text-transform: uppercase;

    &:hover { 
      background-color: #5ECE7B;
      color: #ffffff;
      cursor: pointer;
    }
  }
`

export default class ItemRemoveLayer extends React.Component {
  removeFromCart() {
    this.props.deleteProductFromCart(this.props.id)
    document.getElementById(this.props.id).click()
  }

  render() {
    let length
    if (this.props.attributes.length === 2) {
      length = 'twoAttr'
    } else if (this.props.attributes.length === 3) {
      length = 'threeAttr'
    } else {
      length = ''
    }
    return (
      <StyledItemRemoveLayer 
          height={this.props.height} 
          className={`${this.props.quantity === 0 ? 'delete' : ''} ${length}`}>
        <Text>
          <span>Delete</span><br/>
          <span>{this.props.brand} {this.props.name}</span><br/>
          <span>from cart?</span>
        </Text>
        <ButtonsContainer>
          <button onClick={this.removeFromCart.bind(this)}>delete</button>
          <button onClick={this.props.increaseQuantity}>no</button>
        </ButtonsContainer>
      </StyledItemRemoveLayer>
    )
  }
}