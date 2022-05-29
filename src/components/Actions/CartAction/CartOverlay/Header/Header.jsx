import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 32px 16px 16px 16px;
  width: 310px;
  font-weight: 700;
  
  & span {
    font-weight: 500;
  }
`

export default class Header extends React.Component {
  render() {
    const cartLength = this.props.cartLength
    return (
      <StyledHeader>
        My Bag<span>{ cartLength === 1 ? `, ${cartLength} item` : `, ${cartLength} items`}</span>
      </StyledHeader>
    )
  }
}