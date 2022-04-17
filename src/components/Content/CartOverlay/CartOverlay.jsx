import React from 'react'
import styled from 'styled-components'
import Item from './Item/Item'

const StyledBackground = styled.div`
  z-index: 3;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #393748;
  opacity: 22%;
  position: fixed;
  top: 78px;
`

const StyledCartOverlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  top: 78px;
  right: 9vw;
  width: 250px;
  height: calc((100vh - 80px) - 15vh);
  padding: 20px;
  z-index: 4;
  background-color: white;
`

const StyledHeader = styled.div`
  font-weight: 700;
  & span {
    font-weight: 500;
  }
`

const StyledItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const StyledTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & .total {
    font-weight: 600;
  }

  & .price {
    font-weight: 700;
  }
`

const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & .secondary {
    width: 120px;
    height: 40px;
    text-transform: uppercase;
    color: #1D1F22;
    border: 1px solid #1D1F22;
    font-weight: 500;
    font-size: 14px;
  }

  & .secondary:hover {
    cursor: pointer;
  }

  & .primary {
    width: 120px;
    height: 40px;
    text-transform: uppercase;
    color: white;
    border: none;
    background-color: #5ECE7B;
  }

  & .primary:hover {
    cursor: pointer;
  }
`

class CartOverlay extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <>
        <StyledCartOverlay>
          <StyledHeader>My Bag<span>, 2 items</span></StyledHeader>
          <StyledItems>
            <Item />
            <Item />
          </StyledItems>
          <StyledTotal>
            <span className='total'>Total</span>
            <span className='price'>$100.00</span>
          </StyledTotal>
          <StyledButtons>
            <button className='secondary'>view bag</button>
            <button className='primary'>check out</button>
          </StyledButtons>
        </StyledCartOverlay>
        <StyledBackground></StyledBackground>
      </>
    )
  }
}

export default CartOverlay