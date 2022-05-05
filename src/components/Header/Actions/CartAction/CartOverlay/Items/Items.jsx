import React from 'react'
import styled from 'styled-components'
import Item from './Item/Item'

const StyledItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 293px;
  min-height: 222px;
  max-height: 444px;
  margin: 16px;
  overflow-y: auto;

  & .emptyCart {
    font-weight: 500;
  }
`

export default class Items extends React.Component {
  constructor(props) {
    super(props)
    this.state = { quantity: 1 }
    this.addQuantity = this.addQuantity.bind(this)
    this.decQuantity = this.decQuantity.bind(this)
  }

  addQuantity() {
    this.setState({ quantity: this.state.quantity + 1 })
  }

  decQuantity() {
    this.state.quantity === 1 ? null : this.setState({ quantity: this.state.quantity - 1 })
  }

  render() {
    const mappedItems = this.props.cartItems.length > 0 && this.props.cartItems.map((el) => 
      <Item 
        key={el.id} 
        brand={el.brand} 
        name={el.name} 
        prices={el.prices} 
        currentCurrency={this.props.currentCurrency}
        attributes={el.attributes}
        quantity={this.state.quantity}
        addQuantity={this.addQuantity}
        decQuantity={this.decQuantity}
        gallery={el.gallery} 
      />)
    return (
      <StyledItems>
        { this.props.cartItems.length === 0
          ? <div className='emptyCart'>You cart is<br />currently empty</div>
          : mappedItems }
      </StyledItems>
    )
  }
}