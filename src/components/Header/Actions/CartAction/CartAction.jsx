import React from 'react'
import styled from 'styled-components'
import cart from '../../../../images/cart.png'

const StyledCartAction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0 0 0 10px;
`

class CartAction extends React.Component {
  render() {
    return (
      <StyledCartAction>
        <img src={cart} alt='cart' />
      </StyledCartAction>
    )
  }
}

export default CartAction