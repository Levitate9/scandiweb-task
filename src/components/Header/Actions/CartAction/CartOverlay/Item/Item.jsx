import React from 'react'
import styled from 'styled-components'

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  jusify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin: 0 0 36px 0;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 144px;
  height: 140px;
`

const ColumnQuantity = styled(Column)`
  align-items: center;
  width: 24px;
  margin: 0 10px;
`

const ColumnImage = styled(Column)`
  align-items: stretch;
  width: 105px;
`

const Title = styled.div`
  width: 144px;
  height: 52px;
`

const Brand = styled.div`
  font-weight: 300;
  text-align: left;
`

const Product = styled(Brand)`
`

const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 38px;
  font-weight: 500;
  text-align: left;
`

const Sizes = styled(Price)`
  align-items: flex-end;
  height: 38px;

  & button {
    margin-right: 8px;
  }
`

const AddQuantity = styled(Title)`
  width: 24px;
`

const Quantity = styled(Price)`
  width: 24px;
  justify-content: center;
`

const DecQuantity = styled(Sizes)`
  width: 24px;

  & button {
    margin-right: 0;
  }
`

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  font-size: 14px;
  border: 1px solid #1D1F22;
  background-color: #ffffff;
  cursor: pointer;

  &:disabled {
    border: 1px solid #A6A6A6;
    cursor: default;
  }

  &:active:not([disabled]) {
    background-color: #1D1F22;
    color: #ffffff;
    cursor: pointer;
  }

  &.checked {
    background-color: #1D1F22;
    color: #ffffff;
    cursor: pointer;
  }
`

export default class Item extends React.Component {
  render() {
    return (
      <StyledItem>
        <Column>
          <Title>
            <Brand>Apollo</Brand>
            <Product>Running Short</Product>
          </Title>
          <Price>
            <div>$50.00</div>
          </Price>
          <Sizes>
            <Button disabled value='s'>S</Button>
            <Button value='m' className='checked'>M</Button>
          </Sizes>
        </Column>
        <ColumnQuantity>
          <AddQuantity><Button>+</Button></AddQuantity>
          <Quantity>1</Quantity>
          <DecQuantity><Button>-</Button></DecQuantity>
        </ColumnQuantity>
        <ColumnImage>
          <img alt='product' />
        </ColumnImage>
      </StyledItem>
    )
  }
}
