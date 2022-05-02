import React from 'react'
import styled from 'styled-components'

const StyledTouchID = styled.div`
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

  &.disabled {
    color: #A6A6A6;
    background-color: rgba(166, 166, 166, 0.2);
    outline: 1px solid #A6A6A6;
  }

  &:hover.disabled {
    cursor: default;
  }
`

export default class TouchID extends React.Component {

  render() {
    return (
      <StyledTouchID
        id={`${this.props.className}-${this.props.id}`}
        value={this.props.value}
        className={this.props.className}
        onClick={this.props.onSelect.bind(this)}
      >{this.props.displayValue}</StyledTouchID>
    )
  }
}