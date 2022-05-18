import React from 'react'
import { GET_START_DATA } from './graphql/Queries'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Preloader from './components/common/Preloader'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import styled from 'styled-components'
import Product from './components/Content/Product/Product'
import Cart from './components/Cart/Cart';
import CartOverlayBg from './components/Content/CartOverlayBg/CartOverlayBg'

const StyledApp = styled.div`
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 1440px;
`

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: true,
      categories: [],
      currencies: [],
      cartItems: [],
      currentCategory: '',
      currentCurrency: {},
      isCartOverlayOpen: false,
    }
    this.setCurrency = this.setCurrency.bind(this)
    this.setCategory = this.setCategory.bind(this)
    this.sendProductToCart = this.sendProductToCart.bind(this)
    this.deleteProductFromCart = this.deleteProductFromCart.bind(this)
    this.toggleIsCartOverlayOpen = this.toggleIsCartOverlayOpen.bind(this)
    this.increaseCartItemQuantity = this.increaseCartItemQuantity.bind(this)
    this.decreaseCartItemQuantity = this.decreaseCartItemQuantity.bind(this)
    this.calculateTotal = this.calculateTotal.bind(this)
  }

  setCurrency(newCurrency) {
    const currencies = this.state.currencies
    const currentCurrency = currencies.filter((el) => el.label === newCurrency)[0]
    this.setState({ ...this.state, currentCurrency: currentCurrency })
  }

  setCategory(newCategory) {
    this.setState({ ...this.state, currentCategory: newCategory })
  }

  sendProductToCart(productId) {
    let product = this.state.categories[0].products.filter((el) => el.id === productId)[0]
    product = { ...product, quantity: 1, order: this.state.cartItems.length + 1 }
    this.setState({ ...this.state, cartItems: [...this.state.cartItems, product] })
  }

  deleteProductFromCart(productId) {
    this.setState({ ...this.state, cartItems: this.state.cartItems.filter((el) => el.id !== productId) })
  }

  toggleIsCartOverlayOpen() {
    this.setState({ ...this.state, isCartOverlayOpen: this.state.isCartOverlayOpen ? false : true })
  }

  increaseCartItemQuantity(productId) {
    let product = this.state.cartItems.filter((el) => el.id === productId)[0]
    let otherProducts = this.state.cartItems.filter((el) => el.id !== productId)
    product = { ...product, quantity: product.quantity + 1 }
    this.setState({ ...this.state, cartItems: [...otherProducts, product] })
  }

  decreaseCartItemQuantity(productId) {
    let product = this.state.cartItems.filter((el) => el.id === productId)[0]
    let otherProducts = this.state.cartItems.filter((el) => el.id !== productId)
    product = { ...product, quantity: product.quantity - 1 }
    this.setState({ ...this.state, cartItems: [...otherProducts, product] })
  }

  calculateTotal(cartItems, currentCurrency) {
    let total
    let totalArr = cartItems.length > 0 &&
      cartItems.map((el) => {
        let amount = el.prices.filter((price) => price.currency.label === currentCurrency.label)[0].amount
        return amount * el.quantity
      })
    if (cartItems.length === 0) {
      return total = 0
    } else {
      total = totalArr.reduce((sum, current) => { return sum + current}, 0)
      return total = Number(total.toFixed(2))
    }
  }

  componentDidMount() {
    this.props.client
      .query({ query: GET_START_DATA })
      .then((result) => this.setState({
        ...this.state, 
        categories: result.data.categories,
        currencies: result.data.currencies,
        currentCategory: result.data.categories[0].name,
        currentCurrency: result.data.currencies[0],
        isLoaded: false 
      }))
  }

  render() {
    if (this.state.isLoaded) {
      return <Preloader />
    }
    return (
      <BrowserRouter>
        <StyledApp>
          <Header 
            categories={this.state.categories}
            currencies={this.state.currencies} 
            currentCurrency={this.state.currentCurrency}
            setCategory={this.setCategory}
            setCurrency={this.setCurrency}
            cartItems={this.state.cartItems}
            isCartOverlayOpen={this.state.isCartOverlayOpen}
            toggleIsCartOverlayOpen={this.toggleIsCartOverlayOpen}
            deleteProductFromCart={this.deleteProductFromCart}
            increaseCartItemQuantity={this.increaseCartItemQuantity}
            decreaseCartItemQuantity={this.decreaseCartItemQuantity}
            calculateTotal={this.calculateTotal}
          />
          <Routes>
            <Route path='*' element={<Navigate to='/all' />} />
            { 
              this.state.categories.map(el => 
                <Route exact path={`/${el.name}/*`} key={el.name} element={<Content
                  categories={this.state.categories} 
                  currentCategory={el.name} 
                  currentCurrency={this.state.currentCurrency}
                  sendProductToCart={this.sendProductToCart}
                  deleteProductFromCart={this.deleteProductFromCart}
                />} />
              )
            } 
            {
              this.state.categories.map(el =>
                <Route path={`/${el.name}/:id`} key={el.name} element={<Product 
                  client={this.props.client}
                  currentCurrency={this.state.currentCurrency}
                  sendProductToCart={this.sendProductToCart}
                />} />  
              )
            }
            <Route exact path={`/cart`} element={<Cart
              cartItems={this.state.cartItems} 
              currentCurrency={this.state.currentCurrency}
              increaseCartItemQuantity={this.increaseCartItemQuantity}
              decreaseCartItemQuantity={this.decreaseCartItemQuantity}
              calculateTotal={this.calculateTotal}
            />} />
          </Routes>
          <CartOverlayBg 
            isCartOverlayOpen={this.state.isCartOverlayOpen} 
            toggleIsCartOverlayOpen={this.toggleIsCartOverlayOpen} 
          />
        </StyledApp>
      </BrowserRouter>
    )
  }
}