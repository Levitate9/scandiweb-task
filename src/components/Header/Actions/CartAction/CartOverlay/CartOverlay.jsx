import React from 'react'
import styled from 'styled-components'
import Item from './Item/Item'

const StyledBackground = styled.div`
  z-index: 3;
  display: none;
  width: 1440px;
  height: 100%;
  background-color: #393748;
  opacity: 22%;
  position: fixed;
  top: 78px;
`

const StyledCartOverlay = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  top: 78px;
  left: 1028px;
  width: 325px;
  max-height: 540px;
  z-index: 4;
  background-color: white;
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 8px 16px 20px 16px;
  width: 293px;
`

const StyledHeader = styled.div`
  margin-bottom: 20px;
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
  width: 293px;
  min-height: 180px;
  max-height: 360px;
  overflow-y: auto;
`

const StyledTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  & .total {
    font-weight: 600;
  }

  & .price {
    font-weight: 700;
  }
`

const StyledButtons = styled(StyledTotal)`
  margin: 20px 16px;
  width: 293px;

  & .secondary {
    width: 140px;
    height: 43px;
    text-transform: uppercase;
    color: #1D1F22;
    border: 1px solid #1D1F22;
    font-weight: 500;
    font-size: 14px;
  }

  & .primary {
    width: 140px;
    height: 43px;
    text-transform: uppercase;
    color: white;
    border: none;
    background-color: #5ECE7B;
  }

  & .secondary:hover, .primary:hover {
    cursor: pointer;
  }
`

export default class CartOverlay extends React.Component {

  componentDidMount() {

  }

  render() {
    if (this.props.cartItems === undefined) {
      return (
        <>
          <StyledCartOverlay>
            <StyledWrapper>
             <StyledHeader>My Bag<span></span></StyledHeader>
              <StyledItems>
                <div>You cart is<br />currently empty</div>
              </StyledItems>
              <StyledTotal>
                <span className='total'>Total</span>
                <span className='price'>$0.00</span>
              </StyledTotal>
            </StyledWrapper>
            <StyledButtons>
              <button className='secondary'>view bag</button>
              <button className='primary'>check out</button>
            </StyledButtons>
          </StyledCartOverlay>
          <StyledBackground></StyledBackground>
        </>
      )
    } else {
      const mappedItems = this.props.cartItems.map((el) => <Item key={el.id} />)
      return (
        <>
          <StyledCartOverlay>
            <StyledWrapper>
              <StyledHeader>My Bag<span>, 2 items</span></StyledHeader>
              <StyledItems>
                { mappedItems }
              </StyledItems>
              <StyledTotal>
                <span className='total'>Total</span>
                <span className='price'>$100.00</span>
              </StyledTotal>
            </StyledWrapper>
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
}
