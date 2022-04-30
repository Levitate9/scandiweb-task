import React from 'react'
import styled from 'styled-components'

const StyledCapacity = styled.div`
  width: 48px;
  margin: 0 10px 10px 0;
  padding: 4px 8px;
  border-radius: 3px;
  outline: 1px solid #bababa;

  &:hover {
    cursor: pointer;
  }

  &:nth-child(5n+5) {
    margin: 0 0 10px 0;
  }

  &.selected {
    color: #ffffff;
    background-color: #1D1F22;
  }
`

export default class Capacity extends React.Component {

  render() {
    return (
      <StyledCapacity
        id={this.props.id} 
        className={this.props.className}
        value={this.props.value}
        onClick={this.props.onSelect.bind(this)}
      >{this.props.value}</StyledCapacity>
    )
  }
}