import React from 'react'
import styled from 'styled-components'

const StyledCartQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
  width: 45px;
  height: 45px;
`

const Amount = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 38.4px;
`

export default class CartQuantity extends React.Component {
  render() {
    return (
      <StyledCartQuantity>
        <Button>+</Button>
        <Amount>1</Amount>
        <Button>-</Button>
      </StyledCartQuantity>
    )
  }
}