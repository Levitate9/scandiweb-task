import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  position: absolute;
  right: 31px;
  bottom: 64px;
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background-color: #1D1F22;
  z-index: 11;

  &:hover {
    cursor: pointer;
    background-color: #5ECE7B
  }

  & img {
    width: 24px;
    height: 24px;
    margin-left: -2px;
  }
`

export default class AddToCartIcon extends React.Component {
  render() {
    return (
      <StyledButton className='cart'>
        <img src={this.props.cart} alt='cart' />
      </StyledButton> 
    )
  }
}