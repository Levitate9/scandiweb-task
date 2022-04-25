import React from 'react'
import { GET_START_DATA } from './graphql/Queries'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Preloader from './components/common/Preloader'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import styled from 'styled-components'
import Product from './components/Content/Product/Product'
import Cart from './components/Cart/Cart';

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
    }
    this.toggleCurrency = this.toggleCurrency.bind(this)
    this.setCategory = this.setCategory.bind(this)
  }

  toggleCurrency(newCurrency) {
    const currencies = this.state.currencies
    const currentCurrency = currencies.filter((el) => el.label === newCurrency)
    this.setState({
      ...this.state,
      currentCurrency: currentCurrency
    })
  }

  setCategory(newCategory) {
    this.setState({
      ...this.state,
      currentCategory: newCategory
    })
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
        cartItems: result.data.categories[0].products,
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
            toggleCurrency={this.toggleCurrency}
            cartItems={this.state.cartItems} 
          />
          <Routes>
            <Route path='/' element={<Navigate to='/all' />} />
            <Route path='*' element={<Navigate to='/' />} />
            { 
              this.state.categories.map(el => 
                <Route exact path={`/${el.name}/*`} key={el.name} element={<Content
                  categories={this.state.categories} 
                  currentCategory={el.name} 
                  currentCurrency={this.state.currentCurrency}
                />} />
              )
            } 
            {
              this.state.categories.map(el =>
                <Route path={`/${el.name}/:id`} key={el.name} element={<Product 
                  client={this.props.client}
                  currentCurrency={this.state.currentCurrency}
                />} />  
              )
            }
            <Route exact path={`/cart`} element={<Cart
              items={this.state.cartItems} 
              currentCurrency={this.state.currentCurrency} 
            />} />
          </Routes>
        </StyledApp>
      </BrowserRouter>
    )
  }
}
