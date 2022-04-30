import React from 'react'
import styled from 'styled-components'

const StyledUsb3 = styled.div`
  width: 28px;
  padding: 4px 8px;
  margin: 0 10px 0 0;
  border-radius: 3px;
  outline: 1px solid #bababa;

  &:hover {
    cursor: pointer;
  }

  &.selected {
    color: #ffffff;
    background-color: #1D1F22;
  }
`

export default class Usb3 extends React.Component {

  render() {
    return (
      <StyledUsb3 
        id={`${this.props.className}-${this.props.id}`}
        className={this.props.className} 
        value={this.props.value}
        onClick={this.props.onSelect.bind(this)}
      >{this.props.displayValue}</StyledUsb3>
    )
  }
}