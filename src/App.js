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
      globalTotal: []
    }
    this.setCurrency = this.setCurrency.bind(this)
    this.setCategory = this.setCategory.bind(this)
    this.sendProductToCart = this.sendProductToCart.bind(this)
    this.deleteProductFromCart = this.deleteProductFromCart.bind(this)
    this.toggleIsCartOverlayOpen = this.toggleIsCartOverlayOpen.bind(this)
    this.incGlobalTotal = this.incGlobalTotal.bind(this)
    this.decGlobalTotal = this.decGlobalTotal.bind(this)
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
    this.setState({ ...this.state, cartItems: [...this.state.cartItems, product] })
  }

  deleteProductFromCart(productId) {
    this.setState({
      ...this.state,
      cartItems: this.state.cartItems.filter((el) => el.id !== productId)
    })
  }

  toggleIsCartOverlayOpen() {
    this.setState({ ...this.state, isCartOverlayOpen: this.state.isCartOverlayOpen ? false : true })
  }

  incGlobalTotal(prices, quantity) {
    let itemTotal = prices.map((el) => { return { label: el.currency.label, total: el.amount * quantity } })

    let newGlobalTotal = []
    if (this.state.globalTotal.length > 0) {
      this.state.globalTotal.map((el, i) => {
        let targetTotal = prices[i].amount
        return newGlobalTotal.push({ label: el.label, total: el.total + targetTotal })
      })
    } else {
      newGlobalTotal.push(...itemTotal)
    }
    this.setState({ ...this.state, globalTotal: newGlobalTotal })
  }

  decGlobalTotal(prices, quantity) {
    if (this.state.globalTotal.length === 0) {
      return null
    } else {
      let itemTotal = prices.map((el) => { return { label: el.currency.label, total: el.amount * quantity } })

      var newGlobalTotal = []
      if (this.state.globalTotal.length > 0) {
        this.state.globalTotal.map((el, i) => {
          let targetTotal = prices[i].amount
          return newGlobalTotal.push({ label: el.label, total: el.total - targetTotal })
        })
      } else {
        newGlobalTotal.push(...itemTotal)
      }
      this.setState({ ...this.state, globalTotal: newGlobalTotal })
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
            globalTotal={this.state.globalTotal}
            incGlobalTotal={this.incGlobalTotal}
            decGlobalTotal={this.decGlobalTotal}
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
              items={this.state.cartItems} 
              currentCurrency={this.state.currentCurrency}
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