import React from 'react'
import { GET_START_DATA } from './graphql/Queries'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Preloader from './components/common/Preloader'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import styled from 'styled-components'
import CartOverlay from './components/Content/CartOverlay/CartOverlay'

const StyledApp = styled.div`
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: true,
      categories: [],
      currencies: [],
      currentCurrency: {}
    }
    this.toggletCurrency = this.toggleCurrency.bind(this)
  }

  toggleCurrency(newCurrency) {
    this.setState(() => { 
      const currencies = this.state.currencies
      const currentCurrency = currencies.filter((el) => el.label === newCurrency)
      return { currentCurrency: currentCurrency } 
    })
  }

  componentDidMount() {
    this.props.client
      .query({ query: GET_START_DATA })
      .then((result) => this.setState({ 
        categories: result.data.categories,
        currencies: result.data.currencies,
        currentCurrency: result.data.currencies[0],
        isLoaded: false 
      }))
  }

  render() {
    const categories = this.state.categories
    const currencies = this.state.currencies
    const currentCurrency = this.state.currentCurrency
    const products = categories.filter((el) => el.name === 'all').products

    if (this.state.isLoaded) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <StyledApp>
          <Header 
            categories={categories} 
            currencies={currencies} 
            currentCurrency={currentCurrency}
            toggleCurrency={this.toggleCurrency} 
          />
          <CartOverlay />
          <Routes>
            <Route path='/' element={<Content products={products}/>} />
            { categories.map(el =>
              <Route path={`/${el.name}`} element={<Content products={el.products} />} key={el.name} />
            ) }
          </Routes>
        </StyledApp>
      </BrowserRouter>
    )
  }
}

export default App
