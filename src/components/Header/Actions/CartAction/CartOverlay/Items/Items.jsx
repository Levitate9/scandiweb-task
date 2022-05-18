import React from 'react'
import styled from 'styled-components'
import Item from './Item/Item'

const StyledItems = styled.div`
  width: 312px;
  min-height: 222px;
  max-height: 444px;
  margin: 16px;
  overflow-y: auto;

  & .emptyCart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 222px;
    font-weight: 500;
  }
`

export default class Items extends React.Component {
  componentWillUnmout() {
    if (this.props.cartItems.length === 0) {
      this.props.resetGlobalTotal()
    }
  }

  render() {
    let cartItems = this.props.cartItems.length && this.props.cartItems.sort((a, b) => {
      return a.order - b.order
    })
    const mappedItems = this.props.cartItems.length > 0 && cartItems.map((el) => 
      <Item 
        key={el.id}
        id={el.id}
        brand={el.brand} 
        name={el.name} 
        prices={el.prices} 
        currentCurrency={this.props.currentCurrency}
        attributes={el.attributes}
        gallery={el.gallery}
        type={this.props.type}
        deleteProductFromCart={this.props.deleteProductFromCart}
        increaseCartItemQuantity={this.props.increaseCartItemQuantity}
        decreaseCartItemQuantity={this.props.decreaseCartItemQuantity}
        quantity={el.quantity}
      />)
    return (
      <StyledItems>
        { this.props.cartItems.length === 0
          ? <div className='emptyCart'>
              <div>You cart is<br />currently empty</div>
            </div>
          : mappedItems }
      </StyledItems>
    )
  }
}