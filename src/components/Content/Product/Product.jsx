import React from 'react'
import styled from 'styled-components'

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1 1 386px;
  flex-grow: 0;
  height: 444px;
  margin-bottom: 103px;
  background-color: #F7F06D;

  &:nth-child(3n+1) {
    margin-left: 100px;
  }

  &:nth-child(3n+2) {
    margin: 0 40px;
  }
`

const StyledImg = styled.div`
  margin: 16px 16px 24px 16px;
  & img {
    width: 356px;
    height: 338px;
  }
`

export default class Product extends React.Component {
  render() {
    const imgSrc= this.props.gallery[0]

    return (
      <StyledProductCard>
        <StyledImg>
          <img src={imgSrc} alt='product' />
        </StyledImg>
        <div>{this.props.name}</div>
        <div>Price</div>
      </StyledProductCard>
    )
  }
}