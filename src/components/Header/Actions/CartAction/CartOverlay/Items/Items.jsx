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
  render() {
    const mappedItems = this.props.cartItems.length > 0 && this.props.cartItems.map((el) => 
      <Item 
        key={el.id} 
        brand={el.brand} 
        name={el.name} 
        prices={el.prices} 
        currentCurrency={this.props.currentCurrency}
        attributes={el.attributes}
        gallery={el.gallery}
        type={this.props.type}
        incGlobalTotal={this.props.incGlobalTotal}
        decGlobalTotal={this.props.decGlobalTotal}
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