import React from 'react'
import styled from 'styled-components';

const StyledSelect = styled.select`
  border: none;
  outline: none;
  width: 200px;
  display: flex !important;
  flex-direction: row !important;
  justify-content: flex-end !important;
  align-items: center !important;
`

const StyledOption = styled.option`
  &.option {
    color: red !important;
    margin-left: 10px !important;
  }
`

class CurrencySwitcher extends React.Component {
  componentDidMount() {
  }

  toggleCurrency() {

  }

  render() {
    return (
      <StyledSelect id='switcher'>
        { this.props.currencies.map((el) => <StyledOption
          className='option'
          key={el.label}
          value={el.symbol}
          onClick={this.toggleCurrency}
        >{`${el.symbol} ${el.label}`}</StyledOption> ) }
      </StyledSelect>
    )
  }
} 

export default CurrencySwitcher