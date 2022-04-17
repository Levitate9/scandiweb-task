import React from 'react'
import styled from 'styled-components'
import arrowDown from '../../../../images/arrowDown.png'
import arrowUp from '../../../../images/arrowUp.png'

const StyledCurrencyAction = styled.div`
  display: block
`

const StyledCurrencyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 5px;
  outline: none;
  color: black;
  text-decoration: none;

  &.open > .switcher {
    display: flex
  }

  &.closed > .switcher {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
`

const StyledCurrencyNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const StyledImg = styled.img`
  padding-left: 5px;
`

const StyledCurrencySwitcher = styled.div`
  position: absolute;
  top: 65px;
  right: calc(10vw + 10px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 1001;
  border: 1px solid black;
`

class CurrencyAction extends React.Component {
  toggleSwitcher() {
    let arrow = document.getElementById('arrow')
    let target = document.getElementById('currencyAction')
    if (target.classList.contains('closed')) {
      arrow.setAttribute('src', arrowUp)
      target.classList.remove('closed')
      target.classList.add('open')
      target.setAttribute('value', 'open')
    } else {
      arrow.setAttribute('src', arrowDown)
      target.classList.remove('open')
      target.classList.add('closed')
      target.setAttribute('value', 'closed')
    } 
  }
  render() {
    return (
      <StyledCurrencyAction>
        <StyledCurrencyContainer id='currencyAction' className='closed' onClick={this.toggleSwitcher} value='closed'>
          <StyledCurrencyNavigation>
            <span>{this.props.currentCurrency.symbol}</span><StyledImg src={arrowDown} alt='arrow' id='arrow' />
          </StyledCurrencyNavigation>
          <StyledCurrencySwitcher className='switcher'>
            { this.props.currencies.map((el) => <div 
                key={el.label}
                value={`${el.symbol} ${el.label}`}
                onClick={(e) => console.log(e.currentTarget.value)}
              >{`${el.symbol} ${el.label}`}</div>) }
          </StyledCurrencySwitcher>
        </StyledCurrencyContainer>
      </StyledCurrencyAction>
    )
  }
}

export default CurrencyAction