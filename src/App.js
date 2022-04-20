import React from 'react'
import { GET_START_DATA } from './graphql/Queries'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Preloader from './components/common/Preloader'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import styled from 'styled-components'

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
      currentCurrency: {}
    }
    this.toggleCurrency = this.toggleCurrency.bind(this)
  }

  toggleCurrency(newCurrency) {
    const currencies = this.state.currencies
    const currentCurrency = currencies.filter((el) => el.label === newCurrency)
    this.setState({
      ...this.state,
      currentCurrency: currentCurrency
    })
  }

  componentDidMount() {
    this.props.client
      .query({ query: GET_START_DATA })
      .then((result) => this.setState({ 
        categories: result.data.categories,
        currencies: result.data.currencies,
        currentCurrency: result.data.currencies[0],
        cartItems: result.data.categories[0].products,
        isLoaded: false 
      }))
  }

  render() {
    const categories = this.state.categories
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
            toggleCurrency={this.toggleCurrency}
            cartItems={this.state.cartItems} 
          />
          <Routes>
            <Route path='/' element={<Content categories={categories} />} />
            <Route path='*' element={<Navigate to='/' />} />
            { this.state.categories.map(el =>
              <Route path={`/${el.name}`} element={<Content categories={this.state.categories} />} key={el.name} />
            ) }
          </Routes>
        </StyledApp>
      </BrowserRouter>
    )
  }
}
