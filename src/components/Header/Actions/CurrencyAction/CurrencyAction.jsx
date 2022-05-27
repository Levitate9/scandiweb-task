import React from 'react'
import styled from 'styled-components'
import CurrencyItem from './CurrencyItem/CurrencyItem'

const StyledCurrencyAction = styled.div`
  display: block
`

const CurrencyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 5px;
  outline: none;
  color: black;
  text-decoration: none;

  & .switcher {
    display: none;
  }

  &.open > .switcher {
    display: flex
  }

  &.open > .currencyNavigation > .currencySymbol:after {
    transform: rotate(-135deg);
  }
`

const CurrencyNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`

const CurrencySymbol = styled.div`
  width: 30px;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;

  &:after {
    position: absolute;
    top: 12px;
    content: '';
    border: solid black;
    border-width: 0 1px 1px 0;
    display: inline-block;
    margin-left: 5px;
    padding: 2px;
    transform: rotate(45deg);
  }
`

const CurrencySwitcher = styled.div`
  position: absolute;
  top: 52px;
  right: -12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 114px;
  background-color: #ffffff;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  z-index: 1001;
`

class CurrencyAction extends React.Component {
  toggleIsOpen() {
    this.props.toggleIsCurrencySwitcherOpen()
  }

  render() {
    return (
      <StyledCurrencyAction>
        <CurrencyContainer className={this.props.isCurrencySwitcherOpen ? 'open' : ''} >
          <CurrencyNavigation onClick={this.toggleIsOpen.bind(this)} className='currencyNavigation'>
            <CurrencySymbol className='currencySymbol'>
              {this.props.currentCurrency.symbol}
            </CurrencySymbol>
          </CurrencyNavigation>
          <CurrencySwitcher className='switcher'>
            { this.props.currencies.map((el) => <CurrencyItem 
                key={el.label}
                symbol={el.symbol}
                label={el.label}
                setCurrency={this.props.setCurrency}
                toggleIsOpen={this.toggleIsOpen}
              /> )}
          </CurrencySwitcher>
        </CurrencyContainer>
      </StyledCurrencyAction>
    )
  }
}

export default CurrencyAction