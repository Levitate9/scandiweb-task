import React, { createRef } from 'react'
import styled from 'styled-components'
import CartOverlayDescription from './CartOverlayDescription/CartOverlayDescription'
import CartOverlayQuantity from './CartOverlayQuantity/CartOverlayQuantity'
import CartOverlayImage from './CartOverlayImage/CartOverlayImage'
import ItemRemoveLayer from './ItemRemoveLayer/ItemRemoveLayer'


const StyledItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 0 0 28px 0;
`

const CartOverlayDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  aling-items: center;
  width: 168px;
  min-height: 190px;
`

export default class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = { height: 0 }
    this.ref = createRef()
    this.increaseQuantity = this.increaseQuantity.bind(this)
    this.decreaseQuantity = this.decreaseQuantity.bind(this)
  }

  increaseQuantity() {
    this.props.increaseCartItemQuantity(this.props.id)
  }

  decreaseQuantity() {
    this.props.decreaseCartItemQuantity(this.props.id)
  }

  componentDidMount() {
    this.setState({ height: this.ref.current.clientHeight })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.height !== this.ref.current.clientHeight) {
      this.setState({ height: this.ref.current.clientHeight })
    }
  }

  render() {
    return (
      <StyledItem id={this.props.type} ref={this.ref}>
        <CartOverlayDescriptionContainer>
          <CartOverlayDescription
            brand={this.props.brand} 
            name={this.props.name}
            currentCurrency={this.props.currentCurrency} 
            prices={this.props.prices} 
            attributes={this.props.attributes}
          />
          <CartOverlayQuantity
            quantity={this.props.quantity} 
            increaseQuantity={this.increaseQuantity}
            decreaseQuantity={this.decreaseQuantity} 
          />
        </CartOverlayDescriptionContainer>
        <CartOverlayImage gallery={this.props.gallery} type={this.props.type} />
        <ItemRemoveLayer 
          id={this.props.id} 
          brand={this.props.brand}
          name={this.props.name}
          attributes={this.props.attributes}
          deleteProductFromCart={this.props.deleteProductFromCart}
          quantity={this.props.quantity}
          increaseQuantity={this.increaseQuantity}
          type={this.props.type}
          height={this.state.height}
        />
      </StyledItem>
    )
  }
}
