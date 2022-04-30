import React from 'react'
import styled from 'styled-components'

const StyledSize = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 63px;
  height: 45px;
  margin: 0 12px 12px 0;
  border: 1px solid #1D1F22;
  box-sizing: border-box;
  user-select: none;

  &:nth-child(4n+4) {
    margin: 0 0 12px 0;
  }

  &:hover {
    cursor: pointer;
  }

  &.selected {
    color: #ffffff;
    background-color: #1D1F22;
  }
`

export default class Size extends React.Component {

  render() {
    return (
      <StyledSize
        id={this.props.id} 
        className={this.props.className}
        value={this.props.value}
        onClick={this.props.onSelect.bind(this)}
      >{this.props.value}</StyledSize>
    )
  }
}