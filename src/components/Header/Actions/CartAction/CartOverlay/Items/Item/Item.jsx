import React from 'react'
import styled from 'styled-components'
import CartOverlayName from './CartOverlayName/CartOverlayName'
import CartOverlayPrice from './CartOverlayPrice/CartOverlayPrice'
import AttributeItem
    from '../../../../../../Content/Product/ProductAttributes/AttributeItem/AttributeItem'
import Quantity from './Quantity/Quantity'
import Image from './Image/Image'
import ItemRemoveLayer from './ItemRomoveLayer/ItemRemoveLayer'

const StyledItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 0 0 28px 0;
`

const ContainerDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  aling-items: center;
  width: 168px;
  min-height: 190px;
  margin: 0 8px 0 0;
`

const ColumnDescription = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 136px;
  height: auto;
  z-index: 1;
`

const ColumnQuantity = styled(ColumnDescription)`
  align-items: center;
  width: 24px;
  height: auto;
  margin: 0 0 0 4px;
`

const ContainerImage = styled(ColumnDescription)`
  align-items: stretch;
  width: 121px;
  height: 190px;
`

export default class Item extends React.Component {
  constructor(props) {
    super(props)
    this.increaseQuantity = this.increaseQuantity.bind(this)
    this.decreaseQuantity = this.decreaseQuantity.bind(this)
  }

  increaseQuantity() {
    this.props.increaseCartItemQuantity(this.props.id)
  }

  decreaseQuantity() {
    this.props.decreaseCartItemQuantity(this.props.id)
  }

  render() {
    const mappedCartOverlayAttributes = 
      this.props.attributes.map((el) => {
        return <AttributeItem
          id={el.id} 
          key={el.id} 
          name={el.name} 
          items={el.items} 
          className={this.props.type}
          type={this.props.type}
        /> })

    let itemHeight = 
      document.getElementById(this.props.type) && document.getElementById(this.props.type).clientHeight
    return (
      <StyledItem id={this.props.type}>
        <ContainerDescription>
          <ColumnDescription>
            <CartOverlayName brand={this.props.brand} name={this.props.name} />
            <CartOverlayPrice prices={this.props.prices} currentCurrency={this.props.currentCurrency} />
            { mappedCartOverlayAttributes }
          </ColumnDescription>
          <ColumnQuantity>
            <Quantity 
              quantity={this.props.quantity} 
              increaseQuantity={this.increaseQuantity}
              decreaseQuantity={this.decreaseQuantity} 
            />
          </ColumnQuantity>
        </ContainerDescription>
        <ContainerImage>
          <Image gallery={this.props.gallery} />
        </ContainerImage>
        <ItemRemoveLayer 
          id={this.props.id} 
          brand={this.props.brand}
          name={this.props.name}
          attributes={this.props.attributes}
          deleteProductFromCart={this.props.deleteProductFromCart}
          quantity={this.props.quantity}
          increaseQuantity={this.increaseQuantity}
          type={this.props.type}
          height={itemHeight}
        />
      </StyledItem>
    )
  }
}
